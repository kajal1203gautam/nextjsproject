'use client'
import { useParams } from "next/navigation";
import ChapterName from "./ChapterName";
import Verse from "./verse";
import { useState,useEffect } from "react";


export default function Chapter() {
  const [chapterData, setChapterData] = useState({});

  const {id} = useParams();
  async function fetchChapter() {
    try {
        const response = await fetch(`https://bible-api.com/john+${id}?translation=kjv`)
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
}, [])
  return (
    <>
      <div className="main-wrapper">
        <ChapterName id={id} data={chapterData} />
        <section className="verse-section">
           <div className="container">
            <div className="verse-tools">
                <div className="verse-heder p-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="ver-counter">
                            <h4 className="mb-0">{chapterData?.verses?.length} Verses</h4>
                        </div>
                        <div className="ver-tool-section">
                            <button className="btn btn-secondary">Short <i className="fs-arrow-up-wide-short"></i></button>
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
