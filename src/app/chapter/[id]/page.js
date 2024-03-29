'use client'
import { useParams } from "next/navigation";
import ChapterName from "./ChapterName";
import Verse from "./verse";
import { useState,useEffect } from "react";
import { useContext } from 'react';
import { BookContext } from "@/app/context/bookContext";

export default function Chapter() {
  const [chapterData, setChapterData] = useState({});
  const{state, dispatch} = useContext(BookContext);
  console.log(state, 'dsdjskjsl');
  const {id} = useParams();
  console.log(state.bookName, 'f')
  async function fetchChapter() {
    try {
        const response = await fetch(`https://bible-api.com/${state.bookName}+${id}?translation=kjv`)
        const data = await response.json()
        // const {verses} = data;
        console.log(data, 'data ')
        setChapterData(data);
    }
    catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchChapter();
}, [state.bookName])
  return (
    <>
      <div className="main-wrapper">
        <ChapterName id={id} data={chapterData} text={chapterData} />
        <section className="verse-section">
           <div className="container">
            <div className="verse-tools">
                <div className="verse-heder p-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="ver-counter">
                            <h4 className="mb-0">{chapterData?.verses?.length} Verses</h4>
                        </div>
                        <div className="ver-tool-section">
                        <i class="fa-solid fa-check"></i>
                            <button className="btn btn-secondary">Short <i className="fa-solid fa-arrow-down-9-1"></i></button>
                        </div>
                    </div>
                </div>
               <Verse verse={chapterData.verses} />
            </div>
           </div>
        </section>


      </div>
    </>
  );
}
