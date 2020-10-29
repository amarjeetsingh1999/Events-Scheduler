import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer id='social-footer'>
                <ul>
                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Email" data-placement="top" href="#root">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-envelope fa-stack-1x blacktext"></i>
                        </a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Linkedin" data-placement="top" href="#root"><i className="fa fa-linkedin-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Twitter" data-placement="top" href="#root"><i className="fa fa-twitter-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="GitHub" data-placement="top" href="#root"><i className="fa fa-github-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Facebook" data-placement="top" href="#root"><i className="fa fa-facebook-square fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Instagram" data-placement="top" href="#root"><i className="fa fa-instagram fa-stack-2x"></i></a>
                    </li>

                    <li className='highlight'>
                        <a className="fa-stack fa-1x" data-toggle="tooltip" title="Google+" data-placement="top" href="#root"><i className="fa fa-google-plus-square fa-stack-2x"></i></a>
                    </li>

                </ul>

                <div className="text-center copyright"> ©2020 Amarjeet Singh
                </div>


            </footer>
        );
    }
}

export default Footer;