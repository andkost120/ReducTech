import React, { useState } from "react"
import { questions } from "../utils/staticData"

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState(-1)
  return (
    <section className="faq">
      <div className="container faq-body">
        <h2 className="text-center">FAQ</h2>
        {questions.map(({ question, answer }, idx) => (
          <div
            className={idx === activeIdx ? "faq-item active" : "faq-item"}
            key={idx}
          >
            <h4
              className="faq-item__title position-relative"
              onClick={() => {
                if (idx === activeIdx) setActiveIdx(-1)
                else setActiveIdx(idx)
              }}
              onKeyDown={() => {
                if (idx === activeIdx) setActiveIdx(-1)
                else setActiveIdx(idx)
              }}
              role="presentation"
            >
              {question}
            </h4>
            <p className="faq-item__content">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
