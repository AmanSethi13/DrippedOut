import React from "react";
import { Route, Link, Redirect, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/pages/process.module.scss";
import dream from "../photos/dream.jpg";
import creation from "../photos/creation.jpg";
import action from "../photos/action.jpg";
import monogram from "../photos/monogram.png";
import Ticker from "react-ticker";

const Process = () => {
  return (
    <div className={styles.Process}>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className={styles.marquee}>
              <div className={styles.marqueeInner}>
                <Ticker speed={10}>
                  {() => (
                    <>
                      <img
                        src={monogram}
                        className={styles.monogram}
                        // alt=""
                        width="90px"
                        // height="100%"
                      />

                      <img
                        src={monogram}
                        className={styles.monogram}
                        alt=""
                        width="90px"
                        // height="100%"
                      />
                    </>
                  )}
                </Ticker>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.image_wrapper}>
          <img className={styles.images} src={dream} alt="Dream" />
          <img className={styles.images} src={action} alt="" />
          <img className={styles.images} src={creation} alt="" />
        </div>
        <Row>
          <Col md="12">
            <div className={styles.marquee}>
              <div className={styles.marqueeInner2}>
                {/* <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />
                <img src={monogram} className={styles.monogram} alt="" />

                <img src={monogram} className={styles.monogram} alt="" /> */}
                <Ticker speed={10} direction="toRight">
                  {() => (
                    <>
                      <img
                        src={monogram}
                        className={styles.monogram}
                        // alt=""
                        width="90px"
                        // height="100%"
                      />

                      <img
                        src={monogram}
                        className={styles.monogram}
                        alt=""
                        width="90px"
                        // height="100%"
                      />
                    </>
                  )}
                </Ticker>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
  //   return (
  //     <Ticker>
  //       {() => (
  //         <>
  //           {/* <h1>This is the Headline of element #{index}!</h1> */}
  //           <img
  //             src={monogram}
  //             className={styles.monogram}
  //             alt=""
  //             width="100px"
  //           />
  //           {/* <img src={monogram} className={styles.monogram} alt="" /> */}
  //           {/* <img src={monogram} className={styles.monogram} alt="" /> */}
  //         </>
  //       )}
  //     </Ticker>
  //   );
};

export default Process;
