import React, { useEffect, useRef, useState } from 'react'
import DraggableDialog from '../../DraggableDialog'
import { MineSweeperSquare, GameBoard, TileRow, GameControls, ResetButton, NumDisplay, GameContent, TileImg } from './MineSweeperDialog.styles'
import SmileyFace from '../../../assets/smiley-face.png'
import DeadFace from '../../../assets/dead-face.png'
import Flag from '../../../assets/flag.png'
import MineSweeperIconUrl from '../../../assets/minesweepericon.png'

const MineSweeperDialog = ({ dialog, handleSelectDialog, handleDialogAction, handleCloseDialog }) => {

    const [tiles, setTiles] = useState([])
    const [isGameCompleted, setIsGameCompleted] = useState(false)
    const [isGameWon, setIsGameWon] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [level, setLevel] = useState(localStorage.getItem('level') || 1)
    const [flags, setFlags] = useState([])

    const getMinesBasedOnLevel = () => {
        return 2 * level + 4
    }

    const createGrid = (n, m, flags = false) => {
        return Array.from({ length: n }, () => Array(m).fill(flags ? false : null));
    }

    const getRandomPosition = (n) => {
        const nums = Array.from({ length: 100 }, (_, i) => i);
        for (let i = nums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        return nums.slice(0, n)
    }

    const generateBoard = (boardSize) => {
        const boardTiles = createGrid(boardSize, boardSize)
        const boardFlags = createGrid(boardSize, boardSize, true)
        const mines = getMinesBasedOnLevel()
        const randomPositions = getRandomPosition(mines)
        randomPositions.forEach(position => {
            boardTiles[Math.floor(position / 10)][position % 10] = "mine"
        })
        setTiles(boardTiles)
        setFlags(boardFlags)
        setIsGameWon(false)
        setSeconds(0)
    }

    const getNearbyMinesCount = (m, n) => {
        let count = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const a = m - 1 + i
                const b = n - 1 + j
                if (a >= 0 && b >= 0 && a <= 9 && b <= 9 && tiles[a][b] == "mine")
                    count++
            }
        }
        return count
    }

    const openTile = (m, n, tempTiles) => {
        if (tempTiles[m][n] == "mine") {
            return tempTiles
        }
        else {
            const minesCount = getNearbyMinesCount(m, n)
            tempTiles[m][n] = minesCount
            if (minesCount != 0) {
                return tempTiles
            }
            else {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const a = m - 1 + i
                        const b = n - 1 + j
                        if (a >= 0 && b >= 0 && a <= 9 && b <= 9 && tempTiles[a][b] == null)
                            tempTiles = openTile(a, b, [...tempTiles])
                    }
                }
                return tempTiles
            }
        }
    }

    const handleTileClick = (m, n) => {

        if (flags[m][n]) {
            return
        }
        else if (tiles[m][n] == "mine") {
            const tempTiles = [...tiles]
            tempTiles[m][n] = "explode"
            setIsGameCompleted(true)
        }
        else {
            if (seconds == 0) setSeconds(1)
            const tempTiles = openTile(m, n, [...tiles])
            setTiles(tempTiles)
        }
    }

    const handleResetBoard = () => {
        generateBoard(10)
        setIsGameCompleted(false)
    }

    const handleFlagTile = (e, m, n) => {
        e.preventDefault()

        const tempFlags = [...flags]
        if (tempFlags[m][n]) {
            tempFlags[m][n] = false
        }
        else if (!isGameCompleted && (tiles[m][n] == null || tiles[m][n] == "mine")) {
            tempFlags[m][n] = true
        }
        setFlags(tempFlags)
    }

    useEffect(() => {
        generateBoard(10)
    }, [])

    useEffect(() => {
        const checkIfGameCompleted = () => {
            if (tiles.length < 10) return false;

            const anyNullTile = tiles.some((tileRow) =>
                tileRow.some((tile) => tile === null)
            );

            if (anyNullTile) return false;

            setIsGameCompleted(true);
            setIsGameWon(true);

            setLevel((prev) => {
                const newLevel = Number(prev) + 1;
                localStorage.setItem('level', newLevel);
                return newLevel;
            });

            return true;
        };
        const gameCompleted = checkIfGameCompleted();
        setIsGameCompleted(gameCompleted);
    }, [tiles]);


    useEffect(() => {
        if (isGameCompleted) return
        const intervalid = setInterval(() => {
            setSeconds(prev => prev != 0 ? prev + 1 : 0)
        }, 1000)

        return () => clearInterval(intervalid)
    }, [isGameCompleted])

    useEffect(() => {
        if (isGameWon) {
            const tempFlags = flags.map((flagRow, rowIndex) => {
                return flagRow.map((flag, columnIndex) => {
                    return (tiles[rowIndex][columnIndex] == "mine")
                })
            })

            setFlags(tempFlags)
        }
    }, [isGameWon])

    return (
        <DraggableDialog
            dialog={dialog}
            dialogTitle={dialog.title}
            resizable={false}
            handleSelectDialog={handleSelectDialog}
            handleDialogAction={handleDialogAction}
            handleCloseDialog={handleCloseDialog}
            showMenuBar={true}
            dialogDefaultDimensions={{
                width: 342,
                height: 450
            }}
        >
            <GameContent>
                <GameControls>
                    <NumDisplay>
                        {String(level).padStart(3, '0')}
                    </NumDisplay>
                    <ResetButton src={!isGameCompleted || isGameWon ? SmileyFace : DeadFace} onClick={handleResetBoard} />
                    <NumDisplay>
                        {String(seconds).padStart(3, '0')}
                    </NumDisplay>
                </GameControls>
                <GameBoard>
                    {
                        tiles.map((tileRow, rowIndex) => {
                            return (
                                <TileRow key={rowIndex}>
                                    {
                                        tileRow.map((tile, columnIndex) => {
                                            return (
                                                <MineSweeperSquare
                                                    key={columnIndex}
                                                    className={(tile != null && tile != "mine") ? tile == "explode" ? "explode" : "opened" : ""}
                                                    onClick={() => !isGameCompleted && handleTileClick(rowIndex, columnIndex)}
                                                    onContextMenu={(e) => handleFlagTile(e, rowIndex, columnIndex)}
                                                >
                                                    {tile > 0 ? tile : ((tile == "mine" || tile == "explode") && isGameCompleted && !isGameWon) ? <TileImg src={MineSweeperIconUrl} /> : flags[rowIndex][columnIndex] && <TileImg src={Flag} />}
                                                </MineSweeperSquare>
                                            )
                                        })
                                    }
                                </TileRow>
                            )
                        })
                    }
                </GameBoard>
            </GameContent>
        </DraggableDialog>
    )
}

export default MineSweeperDialog