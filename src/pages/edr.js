import React from "react"

import Layout from "../components/layout"
import SequenceItem from "../components/SequenceItem"
import ServiceItem from "../components/ServiceItem"
import { Looper, SequenceLogo, Triangle } from "../utils/imgImport"
import { services3, services2, ecosystems, examples } from "../utils/staticData"
import ContactSection from "../components/ContactSection"
const Edr = () => {
  return (
    <Layout>
      <section className="sequence-hero">
        <img
          src={Triangle}
          className="triangle-img position-absolute"
          alt="triangle"
        />
        <img
          src={Looper}
          className="looper-img position-absolute"
          alt="looper"
        />
        <div className="container text-center">
          <img src={SequenceLogo} alt="sequence logo" className="mt-3" />
          <h1>Sequence</h1>
          <div className="row">
            {services3.map((item, idx) => (
              <div key={idx} className="col-sm-4">
                <SequenceItem data={item} />
              </div>
            ))}
          </div>
          <button className="btn btn-download">Download now</button>
        </div>
      </section>
      <section className="service-section">
        <div className="container">
          <h2 className="text-center">Our service</h2>
          <div className="row">
            {services2.map((item, idx) => (
              <div key={idx} className="col-sm-6">
                <ServiceItem data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="ecosystem-section">
        <div className="container">
          <h2 className="mb-5 text-center">Connector ecosystem </h2>
          <div className="d-flex justify-content-between mb-5 flex-wrap">
            {ecosystems.map((item, idx) => (
              <img src={item} key={idx} alt="ecosystem" />
            ))}
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            {ecosystems.map((item, idx) => (
              <img src={item} key={idx} alt="ecosystem" />
            ))}
          </div>
        </div>
      </section>
      <section className="example-section">
        <div className="container ">
          {examples.map((item, idx) => (
            <div
              className={idx % 2 === 0 ? "row" : "row flex-row-reverse"}
              key={idx}
            >
              <div className="col-sm-6 d-flex flex-column align-content-center justify-content-center">
                <h2 className="mb-2">{item.title}</h2>
                <p className="txt-grey">{item.text}</p>
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <img src={item.image} alt="example" className="example-img" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </Layout>
  )
}

export default Edr
