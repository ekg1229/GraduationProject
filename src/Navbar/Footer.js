
import React from "react";
import moment from "moment-timezone";
import { Row, Col, Card, OverlayTrigger, Tooltip, Image, Button } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faDownload, faRocket } from "@fortawesome/free-solid-svg-icons";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import LaravelLogo from "../assets/img/technologies/laravel-logo.svg";
import GitHubButton from 'react-github-btn';
import { Link } from 'react-router-dom';
import { Routes } from "../routes";

export default (props) => {
  const currentYear = moment().get("year");
  const showSettings = props.showSettings;

  const toggleSettings = (toggle) => {
    props.toggleSettings(toggle);
  }

  return (
    <div style={{textAnchor: 'center'}}>
      
      <footer className="footer section py-3" style={{background:'#084B8A', position: "fixed", bottom: 0, textAlign: 'center', width: '100%'}}>
        <Row>
          <Col xs={12} lg={12} className="mb-2 mb-lg-0">
            <p className="mb-0 text-center text-xl-left" style={{textAlignLast: 'center', color: 'white'}}>
              Copyright © 2019-{`${currentYear} `} 가천대학교 컴퓨터공학과 척추요정
            </p>
          </Col>

        </Row>
      </footer>
    </div>
  );
};


/*         


<Card.Link href="https://gachon.ac.kr" target="_blank" className="text-blue text-decoration-none fw-normal" color="#FFF">
                Gachon University
              </Card.Link>



<Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/about" target="_blank">
                  About
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/themes" target="_blank">
                  Themes
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/blog" target="_blank">
                  Blog
                </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/contact" target="_blank">
                  Contact
                </Card.Link>
              </li>
            </ul>
          </Col>

          */