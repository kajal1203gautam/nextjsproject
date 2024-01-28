'use client'
import { useState, useEffect, React } from "react"
import Chapters from "./home/page";
import Link from "next/link"
export default function Home() {
    const styles = {
        chapter_card: {
            backgroundColor: 'gray',
            color: "#fff",
            border: "0"
        }
    }
    return (
        <>
            <div className="container-fluid">
                {/* <div className="row">
                    <div className="col-lg-6 text-white">
                        <div className="pt-5 ps-5">
                            <h1>Bible</h1>
                            <p>We want to help you dive deep into God’s Word,<br />
                                by sending you our daily devotionals.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src='./images/book.jpg' style={{ height: '100vh', width: '100%' }} className="img-fluid" />
                    </div>
                </div> */}
                <Chapters />
            </div >

        </>
    )
}