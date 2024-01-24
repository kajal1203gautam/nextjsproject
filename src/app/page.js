'use client'
import { useState, useEffect, React } from "react"
import Link from "next/link"
export default function Home() {
    const styles = {
        chapter_card: {
            backgroundColor: "black",
            color: "#fff",
            border: "0"
        }
    }

    const chapterArray = [
        {
            id: 1,
            name: " chapter 1",
        },
        {
            id: 2,
            name: " chapter 2",
        },
        {
            id: 3,
            name: " chapter 3",
        },
        {
            id: 4,
            name: " chapter 4",
        },
        {
            id: 5,
            name: " chapter 5",
        },
        {
            id: 6,
            name: " chapter 6",
        },
        {
            id: 7,
            name: " chapter 7",
        },
        {
            id: 8,
            name: " chapter 8",
        },
        {
            id: 9,
            name: " chapter 9",
        },
        {
            id: 10,
            name: " chapter 10",
        },
        {
            id: 11,
            name: " chapter 11",
        },
        {
            id: 12,
            name: " chapter 12",
        },
    ]
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {
                        chapterArray.map((item, index) => {
                            return (
                                <div className="col-lg-4 mb-4">
                                    <Link href={`/chapter/${item.id}`}>
                                        <div className="card" style={styles.chapter_card}>
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div >

        </>
    )
}