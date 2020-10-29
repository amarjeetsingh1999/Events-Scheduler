import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    componentDidMount(){
        var scrollpos = window.scrollY;
        var header = document.querySelector("header");

        function addClass(){
            header.classList.add("small");
        }

        function removeClass(){
            header.classList.remove("small");
        }

        window.addEventListener('scroll', function(){ 
            scrollpos = window.scrollY;
    
            if(scrollpos > 60){
                addClass();
            }
            else {
                removeClass();
            }
        });
    }

    render() {
        return (
            <header className="cf">
                <nav>
                    <h1 className="title">{this.props.title}</h1>
                </nav>
            </header>
        );
    }
}

export default Header;