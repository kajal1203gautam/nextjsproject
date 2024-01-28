'use client'

import { useContext } from 'react';
import { BookContext } from '@/app/context/bookContext';
export default function ChapterName({id,data}) {
    const{state, dispatch} = useContext(BookContext);
    console.log(data,'angel')
    return (
        <>
            <section className="chapter-section">
                <div className="container">
                <div className="card border-0 bg-transparent text-center p-5">
                                    <div className="card-body">
                                        <div className="chapter-wrapper">
                                            <p className="chapter-number mb-0">CHAPTER {id}</p>
                                        <h3 className="chapter-title">{state.bookName}</h3>
                                            <div className="chapter-desc">
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </section>

        </>
    )
}