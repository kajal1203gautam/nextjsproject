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
            name: "Romans chapter 1",
        },
        {
            id: 2,
            name: "Romans chapter 2",
        },
        {
            id: 3,
            name: "Romans chapter 3",
        },
        {
            id: 4,
            name: "Romans chapter 4",
        },
        {
            id: 5,
            name: "Romans chapter 5",
        },
        {
            id: 6,
            name: "Romans chapter 6",
        },
        {
            id: 7,
            name: "Romans chapter 7",
        },
        {
            id: 8,
            name: "Romans chapter 8",
        },
        {
            id: 9,
            name: "Romans chapter 9",
        },
        {
            id: 10,
            name: "Romans chapter 10",
        },
        {
            id: 11,
            name: "Romans chapter 11",
        },
        {
            id: 12,
            name: "Romans chapter 12",
        },
    ]
    return (
        <>
            <div className="container">
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