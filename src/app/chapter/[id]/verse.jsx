"use client";
import React from "react"
import { useState, useEffect } from "react"

export default function Verse({verse}) {


    return (
        <>
            <div className="verse-list mt-4">
                {verse && verse.length && verse.map((verseItem, index) => {
                    // console.log(verseItem)
                    return (
                        <div className="card verse-card bg-transparent border-0 mb-3" key={index}>
                            <a href="verse.html"> <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="vers-number">
                                        <h5 className="verse-number-counter mb-0">{verseItem.book_name} {verseItem.chapter}:{verseItem.verse}</h5>
                                    </div>
                                    <div className="vers-content">
                                        <p>{verseItem.text}</p>
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}