'use client'
import { useState, useEffect, React } from "react";
import Link from "next/link";




export default function Home({selectedBook}) {
    const styles = {
        chapter_card:{
            backgroundColor: 'gray',
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
        {
            id: 13,
            name: " chapter 13",
        },
        {
            id: 14,
            name: " chapter 14",
        },
        {
            id: 15,
            name: " chapter 15",
        },
        {
            id: 16,
            name: " chapter 16",
        },
        {
            id: 17,
            name: " chapter 17",
        },
        {
            id: 18,
            name: " chapter 18",
        },
        {
            id: 19,
            name: " chapter 19",
        },
        {
            id: 20,
            name: " chapter 20",
        },
        {
            id: 21,
            name: " chapter 21",
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