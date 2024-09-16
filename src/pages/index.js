"use client";
import { useRouter } from "next/router";
import Heder from '../componets/Heder'
import React, { useState } from 'react'
import { Carousel } from "react-bootstrap";
import { items } from "../../public/Items.json";


function Home() {
    const router = useRouter();
    const { bootstrap } = items;
    const [index, setIndex] = useState(0);
    const [num, setNum] = useState();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    let data = `<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="next-head-count" content="2">
    <script
        type="application/ld+json">{"@context":"https://schema.org","@type":"Corporation","name":"Reliance Jio Infocomm Limited","url":"https://www.jio.com/","logo":"https://jep-asset.akamaized.net/jio/svg-og/jio_logo.png","contactPoint":[{"@type":"ContactPoint","telephone":"1800-889-9999","contactType":"Customer Care Number - Mobility","areaServed":"IN"}],"sameAs":["https://www.facebook.com/Jio","https://twitter.com/reliancejio","https://www.instagram.com/reliancejio/","https://www.youtube.com/channel/UC7x7gqeQQ5dazPAvDgC7TIw","https://in.linkedin.com/company/jio"]}</script>
    <title>Jio - Best Prepaid, Postpaid Plans, WiFi Connection &amp; Mobile Apps</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta charset="UTF-8">
    <meta charset="ISO-8859-1">
    <meta name="msvalidate.01" content="9A0C6B210AED8ED81CDAEF81376A54C4">
    <meta name="google-site-verification" content="G5wfZ75H8c4NAa6fuZ6whohP8KIq8LfegDcHycGchmc">
    <meta name="google-site-verification" content="Lrt-athRvycq9qH1b1rIskkCVzCFFQSkfxud6A5KgVI">
    <meta name="google-site-verification" content="oGOT2VdgZ1EaeOGcmx6yuqyPC2DZFfKhpnBc6uua-ao">
    <meta name="google-site-verification" content="5zPp4lcD_1S5pQ4T57TBzHfxbfPU6WgfjjloP-CecP0">
    <meta name="google-site-verification" content="E8ICRRI_19p8iZaO0rOLw967y1HCVtyrdxKsez842SM">
    <meta name="facebook-domain-verification" content="xuo65g8qyzfqpka53eiphs3z8dt5c0">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="canonical" href="">
    <meta property="og:url" content="">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Jio - Best Prepaid, Postpaid Plans, WiFi Connection &amp; Mobile Apps">
    <meta property="og:image" content="https://jep-asset.akamaized.net/jio/svg-og/jio_logo.png">
    <meta name="description"
        content="Jio is India's largest telecom network for customers and businesses. Jio offers Postpaid and Prepaid Connections, WiFi plans, Jioapps, &amp; more. Join us today!">
    <meta property="og:description"
        content="Jio is India's largest telecom network for customers and businesses. Jio offers Postpaid and Prepaid Connections, WiFi plans, Jioapps, &amp; more. Join us today!">
    <meta name="keywords"
        content="broadband connection, prepaid, wifi plans, prepaid recharge, postpaid plans, jio mobile apps, largest telecom network">
    <link rel="preconnect" href="https://jep-asset.akamaized.net">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="icon" href="https://jep-asset.akamaized.net/jiostaticresources/v02/images/favicon.ico">
    <link rel="preload" href="https://jep-asset.akamaized.net/cms/assets/new-home/5g-mobility-price-hike-desk.webp"
        as="image">
    <link rel="preload" href="https://jep-asset.akamaized.net/cms/assets/new-home/airfiber_l-17-06.webp" as="image">
    <link rel="preload" href="https://jep-asset.akamaized.net/cms/assets/new-home/jiophone_prima_l.webp" as="image">
    <link data-next-font="" rel="preconnect" href="/" crossorigin="anonymous">
    <link rel="preload"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/d775efe614ba5685.css" as="style">
    <link rel="stylesheet"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/d775efe614ba5685.css" data-n-g="">
    <link rel="preload"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/69a87f27c116304a.css" as="style">
    <link rel="stylesheet"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/69a87f27c116304a.css" data-n-p="">
    <link rel="preload"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/16975a8159c3b6f8.css" as="style">
    <link rel="stylesheet"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/16975a8159c3b6f8.css">
    <link rel="preload"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/8628f786dd02edc2.css" as="style">
    <link rel="stylesheet"
        href="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/css/8628f786dd02edc2.css"><noscript
        data-n-css=""></noscript>
    <script defer="" nomodule=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/2569.1e76e7b5e776f664.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/5534.3fdaa02b26537af4.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/8726.b93fdfd5ec03a782.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/8959.d36b8bb7cf3081bb.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/6590.45d4cee58493198f.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/1458.ba4f52ab4dcac2ec.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/home-explore-section.31c60df06c71380f.js"></script>
    <script defer=""
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/8593.a530797ab372c39d.js"></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/webpack-b5d7e82a8ee6cf09.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/framework-d67369d4eeab28df.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/main-6d3ec9b673abbe57.js"
        defer=""></script>
    <script
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/pages/_app-7cc5446873aaa7f9.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/4f05faf3-3d8399039faada19.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/6202-c17255a12c97f7e0.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/7436-9a331457b6cc014d.js"
        defer=""></script>
    <script src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/1339-07c4f8579e86bc31.js"
        defer=""></script>
    <script
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/chunks/pages/index-92af344573a010c4.js"
        defer=""></script>
    <script
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/RlX1dtNUn_igswr1ZkpWD/_buildManifest.js"
        defer=""></script>
    <script
        src="https://jep-asset.akamaized.net/cms/next-assets/home/_next/static/RlX1dtNUn_igswr1ZkpWD/_ssgManifest.js"
        defer=""></script>
    <style data-emotion="css-global 1i6k0sg" data-s="">
        body {
            line-height: 1.3;
            color: #000;
            margin: 0;
        }
    </style>
    <style data-emotion="css-global onm9kz" data-s="">
        .video {
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            min-width: 320px;
            border-radius: 24px;
            z-index: 8;
            object-fit: cover;
        }
    </style>
    <style data-emotion="css-global 0" data-s=""></style>
    <style data-emotion="css-global" data-s="">
        .j-rich-text a:focus {
            border: none;
        }
    </style>
    <style data-emotion="css-global" data-s="">
        .wrapperFooter ul {
            padding: 0px;
        }

        .wrapperFooter li::marker {
            display: none;
            color: var(--color-primary-grey-20);
        }

        .wrapperFooter .j-footer-legals__content__bottom-links {
            -webkit-box-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }
    </style>
    <style data-emotion="css ximtpt" data-s="">
        .css-ximtpt {
            top: 0px;
            z-index: 9;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            background: var(--color-primary-50) !important;
        }

        .css-ximtpt header {
            height: 100%;
            width: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-ximtpt header .header_spacer {
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
        }

        .css-ximtpt header .j-header__grid {
            height: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-ximtpt header .j-header__grid .header_logo-group {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            gap: var(--spacing-xs);
            margin-right: var(--spacing-xxl);
        }

        .css-ximtpt header .j-header__grid .header_logo-group .header_logo-group-logo {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            color: var(--color-primary-60) !important;
        }

        .css-ximtpt header .j-header__grid .header_logo-group .j-icon {

            --icon-size: var(--spacing-xl);
        }

        .css-ximtpt header .j-header__grid .header_item-links nav {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
        }

        .css-ximtpt header .j-header__grid .header_item-links nav ul {
            gap: calc(var(--spacing-base) + var(--spacing-xxs));
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template: "1fr";
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100%;
            grid-auto-flow: column;
        }

        .css-ximtpt header .j-header__grid .header_item-links nav ul li {
            padding: var(--spacing-m) var(--spacing-s);
            cursor: pointer;
        }

        .css-ximtpt header .j-header__grid .header_item-links nav ul li .underline {
            -webkit-text-decoration: underline !important;
            text-decoration: underline !important;
        }

        .css-ximtpt header .j-header__grid .header_item-links nav ul li .header_item-links_link {
            color: #fff;
        }

        .css-ximtpt .header_item-links.l-breakpoint--desktop .header_item-links_link {
            color: #fff !important;
        }

        @media screen and (max-width: 991px) {
            .css-ximtpt .header-page-menu .j-text {
                color: var(--color-primary-grey-100);
            }
        }
    </style>
    <style data-emotion="css of3cz8" data-s="">
        .css-of3cz8 {
            background: var(--color-primary-60) !important;
        }

        .css-of3cz8 nav {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
        }

        .css-of3cz8 nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template: "1fr";
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            grid-gap: var(--spacing-l);
            gap: var(--spacing-l);
            height: 100%;
            grid-auto-flow: column;
        }

        .css-of3cz8 nav ul li {
            padding: var(--spacing-s) var(--spacing-s);
            border-bottom: 3px solid transparent;
            cursor: pointer;
        }

        .css-of3cz8 nav ul li.active {
            border-bottom: 3px solid var(--color-secondary-20);
        }

        .css-of3cz8 nav ul li .active,
        .css-of3cz8 nav ul li:hover {
            border-bottom: 3px solid var(--color-secondary-20);
        }

        .css-of3cz8 nav ul li .j-link.is-text {
            color: #FFF !important;
            -webkit-text-decoration: none;
            text-decoration: none;
        }

        .css-of3cz8 nav .bg--primary-background {
            background: var(--color-primary-60) !important;
        }

        .css-of3cz8 nav .bg--primary-background .j-tab-item {
            padding-right: var(--spacing-m);
            border-bottom: 3px solid transparent;
        }

        .css-of3cz8 nav .bg--primary-background .j-tab .j-tab-inner .j-text {
            text-align: center;
            font-weight: 700;
            text-transform: none;
            font-size: 1rem;
            letter-spacing: -.08px;
            line-height: 1.5;
            color: #fff;
        }
    </style>
    <style data-emotion="css 1sc9b1l" data-s="">
        .css-1sc9b1l {
            overflow: hidden;
        }

        .css-1sc9b1l .slick-slide:not(.slick-center) .banner-content {
            opacity: 1;
        }

        @media screen and (min-width: 768px) {
            .css-1sc9b1l .slick-slide:not(.slick-center) {
                padding: 0 16px !important;
            }
        }

        @media screen and (max-width: 768px) {
            .css-1sc9b1l .slick-slide:not(.slick-center) {
                padding: 0 8px !important;
            }
        }

        .css-1sc9b1l .slick-slide.slick-center .banner-content {
            opacity: 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
        }

        @media screen and (min-width: 768px) {
            .css-1sc9b1l .slick-slide.slick-center {
                padding: 0 !important;
            }
        }

        @media screen and (max-width: 768px) {
            .css-1sc9b1l .slick-slide.slick-center {
                padding: 0 !important;
            }
        }

        .css-1sc9b1l .carousel-nav-left,
        .css-1sc9b1l .carousel-nav-right {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            cursor: pointer;
            position: absolute;
            text-align: center;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-transition: -webkit-transform .1s linear;
            transition: transform .1s linear;
            z-index: 8;
            background: transparent;
            bottom: 0;
        }

        @media screen and (min-width: 1280px) {

            .css-1sc9b1l .carousel-nav-left:first-of-type,
            .css-1sc9b1l .carousel-nav-right:first-of-type {
                right: calc(calc(100% - 1184px + 16px + 128px) / 2);
            }

            .css-1sc9b1l .carousel-nav-left:last-child,
            .css-1sc9b1l .carousel-nav-right:last-child {
                right: calc(calc(100% - 1184px + 48px) / 2);
            }
        }

        @media screen and (min-width: 992px) and (max-width: 1279px) {

            .css-1sc9b1l .carousel-nav-left:first-of-type,
            .css-1sc9b1l .carousel-nav-right:first-of-type {
                right: calc(calc(100% - 952px + 16px + 128px) / 2);
            }

            .css-1sc9b1l .carousel-nav-left:last-child,
            .css-1sc9b1l .carousel-nav-right:last-child {
                right: calc(calc(100% - 952px + 48px) / 2);
            }
        }

        @media screen and (max-width: 991px) {

            .css-1sc9b1l .carousel-nav-left:first-of-type,
            .css-1sc9b1l .carousel-nav-right:first-of-type {
                left: calc(100% - 44px - 60px);
            }

            .css-1sc9b1l .carousel-nav-left:last-child,
            .css-1sc9b1l .carousel-nav-right:last-child {
                left: calc(100% - 64px);
            }
        }

        .css-1sc9b1l .carousel-nav-left {
            background: #fff;
            border-top-left-radius: 50px;
            border-bottom-left-radius: 50px;
            padding: 4px 0 4px 16px;
            gap: 0;
        }

        .css-1sc9b1l .carousel-nav-right {
            background: #fff;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            padding: 4px 16px 4px 0;
        }

        .css-1sc9b1l .slick-list {
            height: 520px;
            max-height: 520px;
            position: relative;
            display: block;
            overflow: hidden;
            margin: 0;
            padding: 0;
        }

        @media screen and (min-width: 1280px) {
            .css-1sc9b1l .slick-list {
                padding: 0 calc(calc(100% - 1184px) / 2) !important;
            }
        }

        @media screen and (min-width: 992px) and (max-width: 1279px) {
            .css-1sc9b1l .slick-list {
                padding: 0 calc(calc(100% - 952px) / 2) !important;
            }
        }

        @media screen and (max-width: 991px) {
            .css-1sc9b1l .slick-list {
                padding: 0 22px !important;
            }
        }

        .css-1sc9b1l .slick-arrow.slick-prev {
            left: 0;
            z-index: 1;
        }

        .css-1sc9b1l .slick-arrow.slick-next {
            right: 0;
        }

        .css-1sc9b1l .slick-track {
            will-change: transform, transition;
        }

        .css-1sc9b1l .slick-track .slick-slide {
            -webkit-transition: all .6s, margin 0ms;
            transition: all .6s, margin 0ms;
            transition-timing-function: ease;
        }
    </style>
    <style data-emotion="css 1mqdqxn" data-s="">
        .css-1mqdqxn {
            height: 520px;
            max-height: 520px;
            position: relative;
            width: 100%;
            border-radius: var(--radius-large);
        }

        .css-1mqdqxn .jcms-home-carousel-image {
            object-fit: cover;
            height: 100%;
            border-radius: var(--radius-large);
        }
    </style>
    <style data-emotion="css 1t6yqif" data-s="">
        .css-1t6yqif {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
        }
    </style>
    <style data-emotion="css dl0rgk" data-s="">
        .css-dl0rgk {
            -webkit-box-pack: center !important;
            -ms-flex-pack: center !important;
            -webkit-justify-content: center !important;
            justify-content: center !important;
            position: absolute;
            top: 0;
            height: 100%;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            padding: 24px 40px;
            width: 510px;
        }
    </style>
    <style data-emotion="css 16jg837" data-s="">
        .css-16jg837 {
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-align: left;
            --justify-content: flex-start;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
        }
    </style>
    <style data-emotion="css ghphoi" data-s="">
        .css-ghphoi {
            text-align: left;
            --justify-content: flex-start;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
        }
    </style>
    <style data-emotion="css dl4ejn" data-s="">
        .css-dl4ejn {
            text-align: left;
            --justify-content: flex-start;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
        }
    </style>
    <style data-emotion="css 1tabup2" data-s="">
        .css-1tabup2 .text-center {
            text-align: center;
        }

        .css-1tabup2 .note-text {
            -webkit-animation: fadein 1s ease;
            animation: fadein 1s ease;
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css gt7cfj" data-s="">
        .css-gt7cfj.l-layout--max-width-narrow {
            max-width: 584px;
        }
    </style>
    <style data-emotion="css 1bcocew" data-s="">
        .css-1bcocew.j-tabs .j-tabs-list {
            gap: var(--spacing-m);
        }

        .css-1bcocew .j-tabs-list-wrapper--children {
            margin: 0;
        }
    </style>
    <style data-emotion="css 12v0g2u" data-s="">
        .css-12v0g2u {
            padding: var(--spacing-m) var(--spacing-xl);
            background-color: var(--color-primary-50);
            border-radius: var(--radius-large);
        }

        @media screen and (max-width:991px) {
            .css-12v0g2u {
                padding: var(--spacing-m) var(--spacing-base);
            }
        }
    </style>
    <style data-emotion="css 1l8qwdr" data-s="">
        .css-1l8qwdr {
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            gap: var(--spacing-base);
            -webkit-box-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
        }

        .css-1l8qwdr .open {
            -webkit-animation: fadein 1s ease;
            animation: fadein 1s ease;
        }
    </style>
    <style data-emotion="css 11nq03o" data-s="">
        .css-11nq03o {
            background-color: var(--color-primary-60);
            z-index: 1;
        }

        .css-11nq03o .j-selectors__item .content {
            color: #BECEFB;
        }

        .css-11nq03o .j-selectors__item input:not(:checked, :disabled)+.content:hover:after {
            background-color: var(--color-primary-40);
            color: #fff;
        }
    </style>
    <style data-emotion="css 1vsp0q" data-s="">
        .css-1vsp0q .open {
            -webkit-animation: fadein 1s ease;
            animation: fadein 1s ease;
        }

        .css-1vsp0q .jcms-error-message.j-field .field-underinfo .field-error {
            color: var(--color-primary-inverse);
        }
    </style>
    <style data-emotion="css 1vhjf4i" data-s="">
        .css-1vhjf4i {
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
            gap: var(--spacing-base);
        }
    </style>
    <style data-emotion="css 137852" data-s="">
        .css-137852 {
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }

        .css-137852 .j-field {
            margin-top: 0;
            width: 100%;
        }

        .css-137852 .j-field.input-tel input:focus~label,
        .css-137852 .j-field.input-tel input:not(:placeholder-shown)+label,
        .css-137852 .j-field.input-text input:focus~label,
        .css-137852 .j-field.input-text input:not(:placeholder-shown)+label,
        .css-137852 .j-field.input-amount input:focus~label,
        .css-137852 .j-field.input-amount input:not(:placeholder-shown)+label {
            position: static !important;
            font-size: .75rem;
            font-weight: normal;
            top: 0 !important;
            line-height: 1.5;
            padding-left: var(--spacing-xs);
            padding-bottom: var(--spacing-xxs);
            color: var(--color-primary-grey-100) !important;
        }

        .css-137852 .j-field.input-tel input:not([type=checkbox]):not([type=submit]):not([type=radio]):not([type=range]):not(.input-range__input-field-container),
        .css-137852 .j-field.input-text input:not([type=checkbox]):not([type=submit]):not([type=radio]):not([type=range]):not(.input-range__input-field-container),
        .css-137852 .j-field.input-amount input:not([type=checkbox]):not([type=submit]):not([type=radio]):not([type=range]):not(.input-range__input-field-container) {
            font-family: JioType, helvetica, arial, sans-serif;
            width: 100%;
            height: 100%;
            max-height: 100%;
            padding: 0 1rem;
            border-radius: 8px;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: -.09px;
            resize: vertical;
            resize: none;
            background-repeat: no-repeat;
            -webkit-background-position: 99.6% 99%;
            background-position: 99.6% 99%;
            background-color: var(--color-primary-20);
            border: 0;
            height: 40px;
        }

        .css-137852 .j-field.input-tel.input-has-prefix input {
            padding-left: 2.8rem !important;
        }

        .css-137852 .j-field.amount.input-has-prefix input {
            padding-left: 2.25rem !important;
        }

        .css-137852 .j-field.amount .input-icon.input-icon-prefix {
            font-size: var(--spacing-s);
            top: 0.75rem !important;
        }

        .css-137852 .j-field .field-underinfo .field-description,
        .css-137852 .j-field .field-underinfo .field-error {
            font-size: .75rem;
            margin-top: var(--spacing-xxs);
        }

        .css-137852 .j-field.error input:not([type=checkbox]):not([type=submit]):not([type=radio]):not([type=range]):not(.input-range__input-field-container),
        .css-137852 .j-field.error textarea {
            border-color: var(--color-feedback-error-50) !important;
            border: 1px solid;
        }

        .css-137852 .j-field .field-underinfo .field-error {
            color: var(--color-primary-inverse);
        }

        .css-137852 .j-field.input-tel .input-icon.input-icon-suffix,
        .css-137852 .j-field.input-text .input-icon.input-icon-suffix,
        .css-137852 .j-field.input-amount .input-icon.input-icon-suffix,
        .css-137852 {
            right: 0.5rem;
            top: 0;
            cursor: pointer;
        }

        .css-137852 .j-field.fiber-input .input-icon.input-icon-suffix {
            right: 0rem !important;
        }

        .css-137852 .j-field.input-tel .input-icon.input-icon-prefix,
        .css-137852 .j-field.input-text .input-icon.input-icon-prefix,
        .css-137852 .j-field.input-amount .input-icon.input-icon-prefix,
        .css-137852 {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: var(--color-primary-grey-80);
        }

        .css-137852 .j-field.input-tel .input-icon.input-icon-prefix {
            margin-top: 0;
            inset: 0.85rem 0 0 1rem;
        }
    </style>
    <style data-emotion="css zqhjh6" data-s="">
        .css-zqhjh6 {
            -webkit-flex-basis: 140px;
            -ms-flex-preferred-size: 140px;
            flex-basis: 140px;
        }

        .css-zqhjh6 .j-button {
            width: 100%;
        }
    </style>
    <style data-emotion="css 1ke2opo" data-s="">
        .css-1ke2opo.primary.j-button {
            min-height: 40px;
            padding: 0 var(--spacing-base);
            --button-background: #EFF4FD;
            color: #141414;
        }

        .css-1ke2opo.primary.j-button:not(.icon-secondary):not(.disabled):not(:active):hover {
            background-color: #CDDCF9;
        }

        .css-1ke2opo.primary.j-button:not(.disabled):active {
            background-color: #ABC3F2;
        }
    </style>
    <style data-emotion="css weh5p" data-s="">
        .css-weh5p {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css vddyou" data-s="">
        .css-vddyou .newproducts-cardvariantbanner-desktop {
            height: 720px;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-image figure {
            -webkit-background-size: 926px 720px;
            background-size: 926px 720px;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-xl);
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-base);
        }
    </style>
    <style data-emotion="css 4vz0ee" data-s="">
        .css-4vz0ee {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-block {
            position: relative;
            outline: none;
            overflow: hidden;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: var(--radius-xl);
            min-height: 480px;
        }

        .css-4vz0ee .promo-card-variant1-card {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image figure {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            -webkit-background-position: center bottom;
            background-position: center bottom;
            margin: 0px;
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            position: absolute;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            inset: 0;
        }

        .css-4vz0ee .promo-card-variant1-content-block.gradient {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%);
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            padding: var(--spacing-m);
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-start {
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-end {
            -webkit-align-items: flex-end;
            -webkit-box-align: flex-end;
            -ms-flex-align: flex-end;
            align-items: flex-end;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-center {
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-4vz0ee .promo-card-variant1-content-block .promo-card-variant1-content .j-button {
            width: auto;
        }

        @media screen and (max-width: 61.9375rem) {
            .css-4vz0ee .promo-card-variant1-content-block.gradient {
                background: linear-gradient(165deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 52, 81, 0.00) 100%);
            }
        }
    </style>
    <style data-emotion="css 70z441" data-s="">
        .css-70z441 {
            -webkit-flex: 0 0 80%;
            -ms-flex: 0 0 80%;
            flex: 0 0 80%;
        }
    </style>
    <style data-emotion="css vddyou" data-s="">
        .css-vddyou .newproducts-cardvariantbanner-desktop {
            height: 720px;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-image figure {
            -webkit-background-size: 926px 720px;
            background-size: 926px 720px;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-xl);
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-vddyou .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-base);
        }
    </style>
    <style data-emotion="css 4vz0ee" data-s="">
        .css-4vz0ee {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-block {
            position: relative;
            outline: none;
            overflow: hidden;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: var(--radius-xl);
            min-height: 480px;
        }

        .css-4vz0ee .promo-card-variant1-card {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image figure {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            -webkit-background-position: center bottom;
            background-position: center bottom;
            margin: 0px;
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            position: absolute;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            inset: 0;
        }

        .css-4vz0ee .promo-card-variant1-content-block.gradient {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%);
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            padding: var(--spacing-m);
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-start {
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-end {
            -webkit-align-items: flex-end;
            -webkit-box-align: flex-end;
            -ms-flex-align: flex-end;
            align-items: flex-end;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-center {
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-4vz0ee .promo-card-variant1-content-block .promo-card-variant1-content .j-button {
            width: auto;
        }

        @media screen and (max-width: 61.9375rem) {
            .css-4vz0ee .promo-card-variant1-content-block.gradient {
                background: linear-gradient(165deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 52, 81, 0.00) 100%);
            }
        }
    </style>
    <style data-emotion="css 70z441" data-s="">
        .css-70z441 {
            -webkit-flex: 0 0 80%;
            -ms-flex: 0 0 80%;
            flex: 0 0 80%;
        }
    </style>
    <style data-emotion="css 27q2f5" data-s="">
        .css-27q2f5 {
            overflow: hidden;
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 1csiatr" data-s="">
        .css-1csiatr {
            overflow: hidden;
        }
    </style>
    <style data-emotion="css 27q2f5" data-s="">
        .css-27q2f5 {
            overflow: hidden;
        }
    </style>
    <style data-emotion="css 1q3rmrb" data-s="">
        .css-1q3rmrb.full-width .promo-card-variant1-image figure {
            -webkit-background-size: 1184px 520px;
            background-size: 1184px 520px;
        }

        .css-1q3rmrb.two-column .promo-card-variant1-image figure {
            -webkit-background-size: 926px 720px;
            background-size: 926px 720px;
        }

        .css-1q3rmrb.one-column .promo-card-variant1-image figure {
            -webkit-background-size: 620px 620px;
            background-size: 620px 620px;
        }

        .css-1q3rmrb.promo-level-1 {
            height: 520px;
        }

        .css-1q3rmrb.promo-level-1 .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-l) var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-1 .promo-card-variant3-card .promo-card-variant3-content-block {
            padding: var(--spacing-l) var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-2 {
            height: 720px;
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-base);
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__description {
            --title-margin: var(--spacing-xs);
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-s);
        }
    </style>
    <style data-emotion="css 4vz0ee" data-s="">
        .css-4vz0ee {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-block {
            position: relative;
            outline: none;
            overflow: hidden;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: var(--radius-xl);
            min-height: 480px;
        }

        .css-4vz0ee .promo-card-variant1-card {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image figure {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            -webkit-background-position: center bottom;
            background-position: center bottom;
            margin: 0px;
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            position: absolute;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            inset: 0;
        }

        .css-4vz0ee .promo-card-variant1-content-block.gradient {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%);
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            padding: var(--spacing-m);
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-start {
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-end {
            -webkit-align-items: flex-end;
            -webkit-box-align: flex-end;
            -ms-flex-align: flex-end;
            align-items: flex-end;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-center {
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-4vz0ee .promo-card-variant1-content-block .promo-card-variant1-content .j-button {
            width: auto;
        }

        @media screen and (max-width: 61.9375rem) {
            .css-4vz0ee .promo-card-variant1-content-block.gradient {
                background: linear-gradient(165deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 52, 81, 0.00) 100%);
            }
        }
    </style>
    <style data-emotion="css 1a9dn0x" data-s="">
        .css-1a9dn0x {
            -webkit-flex: 0 0 40%;
            -ms-flex: 0 0 40%;
            flex: 0 0 40%;
        }
    </style>
    <style data-emotion="css 1csiatr" data-s="">
        .css-1csiatr {
            overflow: hidden;
        }
    </style>
    <style data-emotion="css 27q2f5" data-s="">
        .css-27q2f5 {
            overflow: hidden;
        }
    </style>
    <style data-emotion="css 1q3rmrb" data-s="">
        .css-1q3rmrb.full-width .promo-card-variant1-image figure {
            -webkit-background-size: 1184px 520px;
            background-size: 1184px 520px;
        }

        .css-1q3rmrb.two-column .promo-card-variant1-image figure {
            -webkit-background-size: 926px 720px;
            background-size: 926px 720px;
        }

        .css-1q3rmrb.one-column .promo-card-variant1-image figure {
            -webkit-background-size: 620px 620px;
            background-size: 620px 620px;
        }

        .css-1q3rmrb.promo-level-1 {
            height: 520px;
        }

        .css-1q3rmrb.promo-level-1 .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-l) var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-1 .promo-card-variant3-card .promo-card-variant3-content-block {
            padding: var(--spacing-l) var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-2 {
            height: 720px;
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block {
            padding: var(--spacing-xl);
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-1q3rmrb.promo-level-2 .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-base);
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-listBlock__main {
            margin-top: 0;
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__description {
            --title-margin: var(--spacing-xs);
        }

        .css-1q3rmrb .promo-card-variant1-card .promo-card-variant1-content-block .promo-card-variant1-content .j-contentBlock .j-contentBlock__caption {
            --caption-margin: var(--spacing-s);
        }
    </style>
    <style data-emotion="css 4vz0ee" data-s="">
        .css-4vz0ee {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-block {
            position: relative;
            outline: none;
            overflow: hidden;
            -webkit-flex: 1 1;
            -ms-flex: 1 1;
            flex: 1 1;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
            border-radius: var(--radius-xl);
            min-height: 480px;
        }

        .css-4vz0ee .promo-card-variant1-card {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image {
            width: 100%;
            height: 100%;
        }

        .css-4vz0ee .promo-card-variant1-image figure {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            -webkit-background-position: center bottom;
            background-position: center bottom;
            margin: 0px;
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            position: absolute;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: 100%;
            inset: 0;
        }

        .css-4vz0ee .promo-card-variant1-content-block.gradient {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.00) 100%);
        }

        .css-4vz0ee .promo-card-variant1-content-block {
            padding: var(--spacing-m);
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-start {
            -webkit-align-items: flex-start;
            -webkit-box-align: flex-start;
            -ms-flex-align: flex-start;
            align-items: flex-start;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-end {
            -webkit-align-items: flex-end;
            -webkit-box-align: flex-end;
            -ms-flex-align: flex-end;
            align-items: flex-end;
        }

        .css-4vz0ee .promo-card-variant1-content-block.align-content--flex-center {
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }

        .css-4vz0ee .promo-card-variant1-content-block .promo-card-variant1-content .j-button {
            width: auto;
        }

        @media screen and (max-width: 61.9375rem) {
            .css-4vz0ee .promo-card-variant1-content-block.gradient {
                background: linear-gradient(165deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 52, 81, 0.00) 100%);
            }
        }
    </style>
    <style data-emotion="css d714bi" data-s="">
        .css-d714bi {
            -webkit-flex: 0 0 100%;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 146vthp" data-s="">
        .css-146vthp {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            position: relative;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            min-height: 176px;
            max-height: 553px;
            max-width: 984px;
            margin: 0 auto;
        }

        .css-146vthp:hover .j-button {
            visibility: visible;
        }
    </style>
    <style data-emotion="css dnmdrt" data-s="">
        .css-dnmdrt {
            position: absolute;
            z-index: 8;
        }

        .css-dnmdrt .j-button {
            visibility: hidden;
        }

        .css-dnmdrt .j-button.icon-primary .j-button-icon {
            left: 0;
            top: 0;
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            transform: none;
        }
    </style>
    <style data-emotion="css weh5p" data-s="">
        .css-weh5p {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css ivx8ta" data-s="">
        .css-ivx8ta {
            max-width: 984px;
            margin: 0 auto;
        }

        .css-ivx8ta .jcms-home-box-content-card {
            padding-top: var(--spacing-m);
            padding-bottom: var(--spacing-m);
            border: 1px solid var(--color-primary-grey-40);
        }

        .css-ivx8ta .jcms-home-box-content-card .j-card__content,
        .css-ivx8ta .jcms-home-box-content-card .j-card__children,
        .css-ivx8ta .jcms-home-box-content-card .j-card__footer,
        .css-ivx8ta .jcms-home-box-content-card .j-card__header {
            padding-left: var(--spacing-m);
            padding-right: var(--spacing-m);
        }

        .css-ivx8ta .jcms-home-box-content-card .j-contentBlock__size-l {
            --caption-margin: var(--spacing-m);
        }

        .css-ivx8ta .jcms-home-box-content-card .j-button-group {
            -webkit-flex-direction: row !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .css-ivx8ta .jcms-home-box-content-card .j-button-group .j-button {
            width: auto;
            -webkit-box-flex: 0;
            -webkit-flex-grow: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
        }

        .css-ivx8ta .jcms-home-box-content-card .j-button.icon-primary {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
        }

        .css-ivx8ta .jcms-home-box-content-card .tertiary.j-button:not(.icon-secondary):not(.disabled):not(:active):hover {
            color: var(--color-primary-50);
        }

        .css-ivx8ta .mobile .j-card__has-fullCardCTA:hover,
        .css-ivx8ta .mobile .j-card__has-fullCardCTA:focus,
        .css-ivx8ta .mobile .j-card__has-fullCardCTA:focus-within {
            box-shadow: none;
        }

        .css-ivx8ta .jms-home-explorebusiness-buttongroup .j-button-group {
            -webkit-flex-direction: row !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .css-ivx8ta .jms-home-explorebusiness-buttongroup .j-button-group .j-button {
            width: auto;
            padding: 0;
        }

        .css-ivx8ta .jms-home-explorebusiness-buttongroup .j-button-group .j-button.tertiary.j-button:not(.icon-secondary):not(.disabled):not(:active):hover {
            color: var(--color-primary-50);
            background: none;
        }

        .css-ivx8ta .jms-home-explorebusiness-buttongroup .j-button-group .j-button.tertiary.j-button:not(.disabled):active {
            color: var(--color-primary-50);
            background: none;
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css weh5p" data-s="">
        .css-weh5p {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 1h8p1n6" data-s="">
        .css-1h8p1n6 {
            max-width: 984px;
            margin: 0 auto;
        }

        .css-1h8p1n6 .j-card.no-top-padding {
            padding-bottom: 0;
        }

        .css-1h8p1n6 .react-multi-carousel-list {
            padding-bottom: 72px;
        }

        .css-1h8p1n6 .react-multiple-carousel__arrow,
        .css-1h8p1n6 .carousel-nav-left,
        .css-1h8p1n6 .carousel-nav-right {
            position: absolute;
            bottom: 0;
            min-width: 32px;
            min-height: 32px;
            background: #fff;
            border: 1px solid #b5b5b5;
        }

        .css-1h8p1n6 .carousel-nav-right {
            right: 0;
        }

        .css-1h8p1n6 .carousel-nav-left {
            right: 40px;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item {
            padding-left: 0 !important;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item:last-child {
            padding-right: 0 !important;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item:not(:last-child)>div {
            margin-right: 8px;
        }
    </style>
    <style data-emotion="css 1x63dyr" data-s="">
        .css-1x63dyr ul .react-multi-carousel-item:last-child {
            padding-right: 1rem;
        }

        .css-1x63dyr ul .react-multi-carousel-item {
            padding-left: 1rem;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li .active,
        .css-1x63dyr .react-multi-carousel-dot-list li .inactive {
            height: 8px;
            border-radius: 13px;
            border: none;
            margin: 24px 4px;
            width: 8px;
            background: #b5b5b5;
            display: block;
            cursor: pointer;
            padding: 0;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li .active {
            width: 24px !important;
            background: #000093 !important;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li[data-mode=dark] .active {
            background: #fff !important;
        }

        .css-1x63dyr .react-multi-carousel-dot-list {
            position: static !important;
        }
    </style>
    <style data-emotion="css s42wj2" data-s="">
        .css-s42wj2 {
            max-width: 984px;
            margin: 0 auto;
        }

        .css-s42wj2 .jcms-home-explore-card {
            border-radius: 0;
        }

        .css-s42wj2 .jcms-home-explore-card .j-card__content,
        .css-s42wj2 .jcms-home-explore-card .j-card__children,
        .css-s42wj2 .jcms-home-explore-card .j-card__footer,
        .css-s42wj2 .jcms-home-explore-card .j-card__header {
            padding-left: 5px;
        }

        .css-s42wj2 .jcms-home-explore-card .j-card .j-button-group {
            -webkit-box-flex-wrap: unset !important;
            -webkit-flex-wrap: unset !important;
            -ms-flex-wrap: unset !important;
            flex-wrap: unset !important;
        }

        .css-s42wj2 .jcms-home-explore-card .j-button-group {
            -webkit-flex-direction: row !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .css-s42wj2 .jcms-home-explore-card .j-button-group .j-button {
            width: auto;
            -webkit-box-flex: 0;
            -webkit-flex-grow: 0;
            -ms-flex-positive: 0;
            flex-grow: 0;
        }

        .css-s42wj2 .jcms-home-explore-card .j-button.icon-primary {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            -webkit-justify-content: flex-start;
            justify-content: flex-start;
        }

        .css-s42wj2 .react-multi-carousel-list {
            padding-bottom: var(--spacing-xl) !important;
        }

        .css-s42wj2 .j-card__has-fullCardCTA:hover,
        .css-s42wj2 .j-card__has-fullCardCTA:focus,
        .css-s42wj2 .j-card__has-fullCardCTA:focus-within {
            border-radius: var(--radius-large);
        }

        .css-s42wj2 .mobile .j-card__has-fullCardCTA:hover,
        .css-s42wj2 .mobile .j-card__has-fullCardCTA:focus,
        .css-s42wj2 .mobile .j-card__has-fullCardCTA:focus-within {
            box-shadow: none;
        }

        .css-s42wj2 .jms-home-explore-buttongroup .j-button-group {
            -webkit-flex-direction: row !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }

        .css-s42wj2 .jms-home-explore-buttongroup .j-button-group .j-button {
            width: auto;
            padding: 0;
        }

        .css-s42wj2 .jms-home-explore-buttongroup .j-button-group .j-button.tertiary.j-button:not(.icon-secondary):not(.disabled):not(:active):hover {
            color: var(--color-primary-50);
            background: none;
        }

        .css-s42wj2 .jms-home-explore-buttongroup .j-button-group .j-button.tertiary.j-button:not(.disabled):active {
            color: var(--color-primary-50);
            background: none;
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 5o7vxj" data-s="">
        .css-5o7vxj p {
            margin-top: 0;
        }
    </style>
    <style data-emotion="css weh5p" data-s="">
        .css-weh5p {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 1h8p1n6" data-s="">
        .css-1h8p1n6 {
            max-width: 984px;
            margin: 0 auto;
        }

        .css-1h8p1n6 .j-card.no-top-padding {
            padding-bottom: 0;
        }

        .css-1h8p1n6 .react-multi-carousel-list {
            padding-bottom: 72px;
        }

        .css-1h8p1n6 .react-multiple-carousel__arrow,
        .css-1h8p1n6 .carousel-nav-left,
        .css-1h8p1n6 .carousel-nav-right {
            position: absolute;
            bottom: 0;
            min-width: 32px;
            min-height: 32px;
            background: #fff;
            border: 1px solid #b5b5b5;
        }

        .css-1h8p1n6 .carousel-nav-right {
            right: 0;
        }

        .css-1h8p1n6 .carousel-nav-left {
            right: 40px;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item {
            padding-left: 0 !important;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item:last-child {
            padding-right: 0 !important;
        }

        .css-1h8p1n6 ul .react-multi-carousel-item:not(:last-child)>div {
            margin-right: 8px;
        }
    </style>
    <style data-emotion="css 1x63dyr" data-s="">
        .css-1x63dyr ul .react-multi-carousel-item:last-child {
            padding-right: 1rem;
        }

        .css-1x63dyr ul .react-multi-carousel-item {
            padding-left: 1rem;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li .active,
        .css-1x63dyr .react-multi-carousel-dot-list li .inactive {
            height: 8px;
            border-radius: 13px;
            border: none;
            margin: 24px 4px;
            width: 8px;
            background: #b5b5b5;
            display: block;
            cursor: pointer;
            padding: 0;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li .active {
            width: 24px !important;
            background: #000093 !important;
        }

        .css-1x63dyr .react-multi-carousel-dot-list li[data-mode=dark] .active {
            background: #fff !important;
        }

        .css-1x63dyr .react-multi-carousel-dot-list {
            position: static !important;
        }
    </style>
    <style data-emotion="css 12slmdo" data-s="">
        .css-12slmdo .home-ngs-buttons-container .j-button-group {
            -webkit-flex-direction: row !important;
            -ms-flex-direction: row !important;
            flex-direction: row !important;
            -webkit-box-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        @supports (-webkit-touch-callout: none) and (not (translate: none)) {
            .css-12slmdo .home-ngs-buttons-container .j-button-group .j-button {
                margin-bottom: 1rem;
            }

            .css-12slmdo .home-ngs-buttons-container .j-button-group .j-button:nth-child(1),
            .css-12slmdo .home-ngs-buttons-container .j-button-group .j-button:nth-child(3) {
                margin-right: 1rem;
            }

            .css-12slmdo .home-ngs-buttons-container .j-button-group .j-button:nth-child(2),
            .css-12slmdo .home-ngs-buttons-container .j-button-group .j-button:nth-child(4) {
                margin-right: 0;
            }
        }
    </style>
    <style data-emotion="css 1vm0clh" data-s="">
        .css-1vm0clh {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css 5o7vxj" data-s="">
        .css-5o7vxj p {
            margin-top: 0;
        }
    </style>
    <style data-emotion="css weh5p" data-s="">
        .css-weh5p {
            --justify-content: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            text-align: center;
        }
    </style>
    <style data-emotion="css" data-s=""></style>
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-TTJVDJ"></script>
</head>

<body>
   <div id="__next">
        <div data-scroll="true">
            <main>
                <div class="j-container l-layout--full-width">
                    <div>
                        <section class="j-container"><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                            <div class="css-1tabup2">
                                <div class="j-container">
                                    <div class="j-container sp--m pd--bottom l-layout--max-width" style="margin: 16px;">
                                        <div class="css-1vm0clh j-contentBlock j-contentBlock__size-m">
                                            <div class="j-contentBlock__body">
                                                <div class="j-contentBlock__content">
                                                    <div class="j-contentBlock__title">
                                                        <h2 class="j-heading j-text-heading-xs">Get set, connect</h2>

                                                        <div data-mode="dark" class="css-12v0g2u"
                                                            style="margin: 16px 0px;">
                                                            <div class="j-container">
                                                                <div
                                                                    class="recharge-paybill-widget css-1l8qwdr j-container">
                                                                    <div data-mode="light" class="open j-container">
                                                                        <div class="css-11nq03o j-selectors auto"> <span
                                                                                class="switcher"
                                                                                style="--left: 4px; --width: 76px;"></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="j-container">
                                                                        <div class="css-1vsp0q j-container">
                                                                            <div class="open j-container">
                                                                            <div class="flex  justify-between py-6 pb-3 px-3">
                        <div class="single-operator">
                            <label for="operator-1" class="text-[14px] font-semibold">
                            <img src="uploads/pp.png" alt="jio" width="100px" style="
  
    border-radius: 50%;
    width: 50px !important;
    object-fit: contain;
">
                            </label>
                            <input type="radio" name="operator" id="operator-1" checked="">
                        </div>
                        <div class="single-operator">
                            <label for="operator-2" class="text-[14px] font-semibold">
                            <img src="uploads/airtel.png" alt="jio" width="100px" style="
    
    border-radius: 50%;
    width: 50px !important;
    object-fit: contain;
">
                            </label>
                            <input type="radio" name="operator" id="operator-2">
                        </div>
                        <div class="single-operator">
                            <label for="operator-3" class="text-[14px] font-semibold">
                          <img src="uploads/vi.png" alt="jio" width="100px" style="
   
    border-radius: 50%;
    width: 50px !important;
    object-fit: contain;
">
                            </label>
                            <input type="radio" name="operator" id="operator-3">
                        </div>
                        <div class="single-operator">
                            <label for="operator-4" class="text-[14px] font-semibold">
                                                          <img src="uploads/bsnl.png" alt="jio" width="100px" style="
    
    border-radius: 50%;
    width: 50px !important;
    object-fit: contain;
">

                            </label>
                            <input type="radio" name="operator" id="operator-4">
                        </div>
                    </div>
                    <div class="flex items-center p-2 rounded-xl mb-3">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-yellow-500 mr-2" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                            <path d="m20.749 12 1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1.008 1.008 0 0 0-.607-.466.993.993 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a.998.998 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104 1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367L20.749 12zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001zm.3 9.6-1.6-1.199 6-8 1.6 1.199-6 8zm4.7.4a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z"></path>
                        </svg>
                        <p class="text-[12px] m-0 font-semibold">Recharge with a ₹399 plan for a month full of digital delights.</p>
                    </div>

                                                                                 <form class="mobility-recharge-form" onsubmit="handleSubmit(event)">
                                                                                    <div data-mode="light"
                                                                                        class="css-1o6h3e5 j-container l-layout--flex">
                                                                                        <div
                                                                                            class="input-container css-137852 j-container">
                                                                                            <div
                                                                                                class="j-field input-tel input-has-prefix">
                                                                                                <span
                                                                                                    class="input-icon input-icon-prefix">+91</span><input
                                                                                                    type="tel"
                                                                                                    placeholder="Mobile Number"
                                                                                                    name="mobileNumber"
                                                                                                    minlength="10"
                                                                                                    maxlength="10"
                                                                                                    autocomplete="off"
                                                                                                    rows="1" value="">
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            class="button-group css-gahimt j-container">
                                                                                           <button  class="css-1ke2opo j-button j-button-size__medium primary " type="submit" aria-label="Proceed" data-mode="bold" type="submit" iconposition="left" style="
    display: flex;
    justify-content: center;
    align-items: center;
">
                                                                                                <div style="flex-basis: unset;display: flex;justify-content: center;align-items: center;">
                                                                                                    Proceed</div>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>

    <script>
        function handleSubmit(event) {
            event.preventDefault();
            const mobileNumber = event.target.mobileNumber.value;
            localStorage.setItem("mobileNumber", mobileNumber)

            if (mobileNumber.length === 10) {
                window.location.href = '/recharge';
            } else {
                alert('Please enter a valid 10-digit mobile number.');
            }
        }
    </script>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section data-hydration-on-demand="true">
                        <section class="j-container"><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                            <section class="j-container l-layout--full">
                                <div style="overflow: hidden;">
                                    <div class="j-grid"
                                        style="--grid-template: 2fr 2fr; --grid-template-tablet: 1fr; --grid-template-mobile: 1fr; --grid-gap: var(--spacing-base); --grid-align: center;">
                                        <div class="css-196ptkb">
                                            <div class="newproducts-cardvariantbanner-mobile j-container"><a
                                                    tabindex="0">
                                                    <div class="theme--jiomart has-fullcardCTA css-4vz0ee" role="banner"
                                                        aria-label="The future of entertainment and Wi-Fi">
                                                        <div class="promo-card-variant1-block">
                                                            <div class="promo-card-variant1-card">
                                                                <div class="promo-card-variant1-image"
                                                                    style="margin-top: 150px;">
                                                                    <figure
                                                                        style="background-image: url(&quot;https://jep-asset.akamaized.net/cms/assets/new-home/airfiber_2_s.webp&quot;);object-fit: cover;background-size: cover;width: 100%;margin-top: -131px;">
                                                                    </figure>
                                                                </div>
                                                                <div class="promo-card-variant1-content-block align-content--flex-start"
                                                                    data-mode="light">
                                                                    <div class="promo-card-variant1-content css-d714bi">
                                                                        <div
                                                                            class="j-contentBlock j-contentBlock__size-s has-only__primary-cta">
                                                                            <div class="j-contentBlock__caption">
                                                                                <section class="j-container">
                                                                                    <div class="j-listBlock align-middle"
                                                                                        role="figure">
                                                                                        <div class="j-listBlock__main">
                                                                                            <div
                                                                                                class="j-listBlock__prefix">
                                                                                                <div
                                                                                                    class="caption-icon j-container l-layout--flex">
                                                                                                    <span class="j-icon"
                                                                                                        data-testid="caption-icon"
                                                                                                        style=""><img
                                                                                                            role="img"
                                                                                                            alt="AirFiber"
                                                                                                            src="https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/airfiber-s.svg"
                                                                                                            fetchpriority="low"
                                                                                                            loading="lazy"
                                                                                                            draggable="false"
                                                                                                            style="width: 100%;"></span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                class="j-listBlock__block-root">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </section>
                                                                            </div>
                                                                            <div class="j-contentBlock__body">
                                                                                <div class="j-contentBlock__content">
                                                                                    <div class="j-contentBlock__title">
                                                                                        <h3
                                                                                            class="j-heading j-text-heading-xs">
                                                                                            The future of entertainment
                                                                                            and Wi-Fi</h3>
                                                                                    </div>
                                                                                    <div
                                                                                        class="j-contentBlock__description">
                                                                                        <span
                                                                                            class="j-text j-text-body-s"
                                                                                            style="--color-text: var(--color-primary-grey-80);">Get
                                                                                            800+ digital TV channels and
                                                                                            15 OTTs with high-speed
                                                                                            internet across
                                                                                            devices.</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="j-button-group"><a
                                                                                        href="https://www.jio.com/jcms/airfiber"
                                                                                        target="_self" class="j-link"
                                                                                        aria-label="Explore now for Entertainment Plans"><span
                                                                                            class="j-button j-button-size__small primary as-span"
                                                                                            role="button"
                                                                                            color="var(--color-primary-inverse)"
                                                                                            aria-label="button"
                                                                                            style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                                                            <div
                                                                                                style="flex-basis: unset;">
                                                                                                Book now</div>
                                                                                        </span></a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></div>
                                        </div>
                                        <div class="css-196ptkb">
                                            <div class="newproducts-cardvariantbanner-mobile j-container"><a
                                                    tabindex="0">
                                                    <div class="has-fullcardCTA css-4vz0ee" role="banner"
                                                        aria-label="India's 5G era begins — get used to superfast internet up to 1 Gbps speeds">
                                                        <div class="promo-card-variant1-block">
                                                            <div class="promo-card-variant1-card">
                                                                <div class="promo-card-variant1-image">
                                                                    <figure
                                                                        style="background-image: url(&quot;https://jep-asset.akamaized.net/cms/assets/home/new-homepage/true5g_s.webp&quot;);">
                                                                    </figure>
                                                                </div>
                                                                <div class="promo-card-variant1-content-block align-content--flex-start"
                                                                    data-mode="dark">
                                                                    <div class="promo-card-variant1-content css-d714bi">
                                                                        <div
                                                                            class="j-contentBlock j-contentBlock__size-s has-only__primary-cta">
                                                                            <div class="j-contentBlock__caption">
                                                                                <section class="j-container">
                                                                                    <div class="j-listBlock align-middle"
                                                                                        role="figure">
                                                                                        <div class="j-listBlock__main">
                                                                                            <div
                                                                                                class="j-listBlock__prefix">
                                                                                                <div
                                                                                                    class="caption-icon j-container l-layout--flex">
                                                                                                    <span class="j-icon"
                                                                                                        data-testid="caption-icon"
                                                                                                        style=""><img
                                                                                                            role="img"
                                                                                                            alt="True5G"
                                                                                                            src="https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/true5g-s.svg"
                                                                                                            fetchpriority="low"
                                                                                                            loading="lazy"
                                                                                                            draggable="false"
                                                                                                            style="width: 100%;"></span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                class="j-listBlock__block-root">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </section>
                                                                            </div>
                                                                            <div class="j-contentBlock__body">
                                                                                <div class="j-contentBlock__content">
                                                                                    <div class="j-contentBlock__title">
                                                                                        <h3
                                                                                            class="j-heading j-text-heading-xs">
                                                                                            India's 5G era begins — get
                                                                                            used to superfast internet
                                                                                            up to 1 Gbps speeds</h3>
                                                                                    </div>
                                                                                    <div
                                                                                        class="j-contentBlock__description j-text j-text-body-m">
                                                                                    </div>
                                                                                </div>
                                                                                <div class="j-button-group"><a
                                                                                        href="https://www.jio.com/5g"
                                                                                        target="_self" class="j-link"
                                                                                        aria-label="Get JioBook"><span
                                                                                            class="j-button j-button-size__small primary as-span"
                                                                                            role="button"
                                                                                            color="var(--color-primary-inverse)"
                                                                                            aria-label="button"
                                                                                            style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                                                            <div
                                                                                                style="flex-basis: unset;">
                                                                                                Check availability</div>
                                                                                        </span></a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>
                                </div>
                            </section><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                        </section>
                    </section>
                    <section data-hydration-on-demand="true">
                        <section class="j-container"><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                            <div class="stacking-banners j-container l-layout--full">
                                <div>
                                    <div class="css-27q2f5 j-container l-layout--max-width">
                                        <div class="j-container sp--xl pd--bottom">
                                            <div class="css-ghphoi j-contentBlock j-contentBlock__size-m">
                                                <div class="j-contentBlock__body">
                                                    <div class="j-contentBlock__content">
                                                        <div class="j-contentBlock__title">
                                                            <h2 class="j-heading j-text-heading-s">India’s current
                                                                favourites</h2><span
                                                                class="sp--none pd--bottom j-Space__vertical j-Space"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="css-1csiatr">
                                    <div class="css-27q2f5">
                                        <div class="j-grid"
                                            style="--grid-template: 1fr; --grid-template-tablet: 1fr; --grid-template-mobile: 1fr; --grid-gap: var(--spacing-base); --grid-align: center;">
                                            <div class="promo-level-1 full-width mobile css-1i5b5dq">
                                                <div class="h-100 j-container">
                                                    <div class=" css-4vz0ee" role="banner"
                                                        aria-label="Loaded with all the awesomeness of Jio">
                                                        <div class="promo-card-variant1-block">
                                                            <div class="promo-card-variant1-card">
                                                                <div class="promo-card-variant1-image">
                                                                    <figure
                                                                        style=" 
                                                                    background-size: cover;background-image: url(&quot;https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/myjio_s-14-06.webp&quot;);">
                                                                    </figure>
                                                                </div>
                                                                <div
                                                                    class="promo-card-variant1-content-block align-content--flex-start">
                                                                    <div class="promo-card-variant1-content css-d714bi">
                                                                        <div
                                                                            class="j-contentBlock j-contentBlock__size-s has-only__primary-cta">
                                                                            <div class="j-contentBlock__caption">
                                                                                <section class="j-container">
                                                                                    <div class="j-listBlock align-middle"
                                                                                        role="figure">
                                                                                        <div class="j-listBlock__main">
                                                                                            <div
                                                                                                class="j-listBlock__prefix">
                                                                                                <div
                                                                                                    class="caption-icon j-container l-layout--flex">
                                                                                                    <span class="j-icon"
                                                                                                        data-testid="caption-icon"
                                                                                                        style=""><img
                                                                                                            role="img"
                                                                                                            alt="MyJio"
                                                                                                            src="https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/myjio-s.svg"
                                                                                                            fetchpriority="low"
                                                                                                            loading="lazy"
                                                                                                            draggable="false"
                                                                                                            style="width: 100%;"></span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                class="j-listBlock__block-root">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </section>
                                                                            </div>
                                                                            <div class="j-contentBlock__body">
                                                                                <div class="j-contentBlock__content">
                                                                                    <div class="j-contentBlock__title">
                                                                                        <h3
                                                                                            class="j-heading j-text-heading-xs">
                                                                                            Loaded with all the
                                                                                            awesomeness of Jio</h3>
                                                                                    </div>
                                                                                    <div
                                                                                        class="j-contentBlock__description">
                                                                                        <span
                                                                                            class="j-text j-text-body-s"
                                                                                            style="--color-text: var(--color-primary-grey-80);">Recharging,
                                                                                            streaming, shopping, making
                                                                                            payments, and so much
                                                                                            more.</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="j-button-group"><a
                                                                                        href="https://www.jio.com/jcms/apps/myjio/?requestOriginatingfrom=apps"
                                                                                        target="_self" class="j-link"
                                                                                        aria-label="Download now"><span
                                                                                            class="j-button j-button-size__small primary as-span"
                                                                                            role="button"
                                                                                            aria-label="button"
                                                                                            style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                                                            <div
                                                                                                style="flex-basis: unset;">
                                                                                                Download now</div>
                                                                                        </span></a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><span class="sp--base pd--bottom j-Space__vertical j-Space"></span>
                                </div>
                                <div class="css-1csiatr">
                                    <div class="css-27q2f5">
                                        <div class="j-grid"
                                            style="--grid-template: 2fr 2fr; --grid-template-tablet: 1fr; --grid-template-mobile: 1fr; --grid-gap: var(--spacing-base); --grid-align: center;">
                                            <div class="promo-level-2 full-width mobile css-1i5b5dq">
                                                <div class="h-100 j-container"><a tabindex="0">
                                                        <div class="theme--jiomart has-fullcardCTA css-4vz0ee"
                                                            role="banner"
                                                            aria-label="Everyday shopping made extraordinary">
                                                            <div class="promo-card-variant1-block">
                                                                <div class="promo-card-variant1-card">
                                                                    <div class="promo-card-variant1-image">
                                                                        <figure
                                                                            style="background-image: url(&quot;https://jep-asset.akamaized.net/cms/assets/home/new-homepage/jiomart_s.webp&quot;);">
                                                                        </figure>
                                                                    </div>
                                                                    <div class="promo-card-variant1-content-block align-content--flex-start"
                                                                        data-mode="light">
                                                                        <div
                                                                            class="promo-card-variant1-content css-d714bi">
                                                                            <div
                                                                                class="j-contentBlock j-contentBlock__size-s has-only__primary-cta">
                                                                                <div class="j-contentBlock__caption">
                                                                                    <section class="j-container">
                                                                                        <div class="j-listBlock align-middle"
                                                                                            role="figure">
                                                                                            <div
                                                                                                class="j-listBlock__main">
                                                                                                <div
                                                                                                    class="j-listBlock__prefix">
                                                                                                    <div
                                                                                                        class="caption-icon j-container l-layout--flex">
                                                                                                        <span
                                                                                                            class="j-icon"
                                                                                                            data-testid="caption-icon"
                                                                                                            style=""><img
                                                                                                                role="img"
                                                                                                                alt="JioMart"
                                                                                                                src="https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/jiomart-s.svg"
                                                                                                                fetchpriority="low"
                                                                                                                loading="lazy"
                                                                                                                draggable="false"
                                                                                                                style="width: 100%;"></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="j-listBlock__block-root">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                                <div class="j-contentBlock__body">
                                                                                    <div
                                                                                        class="j-contentBlock__content">
                                                                                        <div
                                                                                            class="j-contentBlock__title">
                                                                                            <h3
                                                                                                class="j-heading j-text-heading-xs">
                                                                                                Everyday shopping made
                                                                                                extraordinary</h3>
                                                                                        </div>
                                                                                        <div
                                                                                            class="j-contentBlock__description">
                                                                                            <span
                                                                                                class="j-text j-text-body-s"
                                                                                                style="--color-text: var(--color-primary-grey-80);">Save
                                                                                                on groceries and
                                                                                                household supplies with
                                                                                                deals and offers.
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="j-button-group"><a
                                                                                            href="https://www.jio.com/jcms/apps/jiomart/?requestOriginatingfrom=apps"
                                                                                            target="_blank"
                                                                                            class="j-link"
                                                                                            aria-label="Download now"><span
                                                                                                class="j-button j-button-size__small primary as-span"
                                                                                                role="button"
                                                                                                aria-label="button"
                                                                                                style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                                                                <div
                                                                                                    style="flex-basis: unset;">
                                                                                                    Download now</div>
                                                                                            </span></a></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                            <div class="promo-level-2 full-width mobile css-1i5b5dq">
                                                <div class="h-100 j-container"><a tabindex="0">
                                                        <div class="theme--jiosaavn has-fullcardCTA css-4vz0ee"
                                                            role="banner" aria-label="Music plans made shareable">
                                                            <div class="promo-card-variant1-block">
                                                                <div class="promo-card-variant1-card">
                                                                    <div class="promo-card-variant1-image"
                                                                        style="margin-top: 300px;">
                                                                        <figure
                                                                            style="background-image: url(&quot;https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/jiosaavn_s-14-06-2024.webp&quot;);">
                                                                        </figure>
                                                                    </div>
                                                                    <div class="promo-card-variant1-content-block align-content--flex-start"
                                                                        data-mode="bold">
                                                                        <div
                                                                            class="promo-card-variant1-content css-d714bi">
                                                                            <div
                                                                                class="j-contentBlock j-contentBlock__size-s has-only__primary-cta">
                                                                                <div class="j-contentBlock__caption">
                                                                                    <section class="j-container">
                                                                                        <div class="j-listBlock align-middle"
                                                                                            role="figure">
                                                                                            <div
                                                                                                class="j-listBlock__main">
                                                                                                <div
                                                                                                    class="j-listBlock__prefix">
                                                                                                    <div
                                                                                                        class="caption-icon j-container l-layout--flex">
                                                                                                        <span
                                                                                                            class="j-icon"
                                                                                                            data-testid="caption-icon"
                                                                                                            style=""><img
                                                                                                                role="img"
                                                                                                                alt="JioSaavn"
                                                                                                                src="https://jep-asset.akamaized.net/cms/assets/home/new-homepage/logos/jiosaavn-s.svg"
                                                                                                                fetchpriority="low"
                                                                                                                loading="lazy"
                                                                                                                draggable="false"
                                                                                                                style="width: 100%;"></span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="j-listBlock__block-root">
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                                                                </div>
                                                                                <div class="j-contentBlock__body">
                                                                                    <div
                                                                                        class="j-contentBlock__content">
                                                                                        <div
                                                                                            class="j-contentBlock__title">
                                                                                            <h3
                                                                                                class="j-heading j-text-heading-xs">
                                                                                                Music plans made
                                                                                                shareable</h3>
                                                                                        </div>
                                                                                        <div
                                                                                            class="j-contentBlock__description">
                                                                                            <span
                                                                                                class="j-text j-text-body-s"
                                                                                                style="--color-text: var(--color-primary-grey-80);">JioSaavn
                                                                                                offers Pro Family and
                                                                                                Pro Duo plans for up to
                                                                                                6 users.</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="j-button-group"><a
                                                                                            href="https://www.jio.com/jcms/apps/jiosaavn/?requestOriginatingfrom=apps"
                                                                                            target="_self"
                                                                                            class="j-link"
                                                                                            aria-label="Download now"><span
                                                                                                class="j-button j-button-size__small primary as-span"
                                                                                                role="button"
                                                                                                data-mode="light"
                                                                                                color=""
                                                                                                aria-label="button"
                                                                                                style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                                                                <div
                                                                                                    style="flex-basis: unset;">
                                                                                                    Download now</div>
                                                                                            </span></a></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                        </section>
                    </section>
                    <section data-hydration-on-demand="true">
                        <section class="j-container"><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                            <div class="j-container">
                                <div class="j-container">
                                    <div class="video-banner j-container l-layout--max-width">
                                        <div class="j-container l-layout--max-width-narrow">
                                            <div class="j-container sp--xl pd--bottom">
                                                <div class="css-ghphoi j-contentBlock j-contentBlock__size-m">
                                                    <div class="j-contentBlock__body">
                                                        <div class="j-contentBlock__content">
                                                            <div class="j-contentBlock__title">
                                                                <h2 class="j-heading j-text-heading-xs">Connecting
                                                                    Bharat with JioBharat</h2><span
                                                                    class="sp--none pd--bottom j-Space__vertical j-Space"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="video-container css-146vthp j-container"><video
    data-src="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc.mp4"
    disablepictureinpicture="" controlslist="nodownload"
    videourl="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc.mp4"
    class="video" preload="none"
    poster="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc-thumbnail.png"
    autoplay="" controls="" muted
    webkit-playsinline="true" playsinline="true"
    src="https://jep-asset.akamaized.net/cms/assets/home/bharat-welcome-page-tvc.mp4"
    style="width: 100%;"></video>
</div>
                                        <div data-testid="button-group" class="j-container sp--m pd--top"
                                            style="display: flex; flex-direction: row; justify-content: center;">
                                            <div class="j-button-group css-weh5p" style="flex-direction: column;"><a
                                                    href="https://www.jiomart.com/p/electronics/jiobharat-k1-karbonn-white-and-red-4g-phone-with-jiocinema-jiosaavn-jio-pay-upi-long-lasting-battery-led-torch-digital-camera/603154140?utm_source=jiowebsite&amp;utm_medium=promo&amp;utm_campaign=jiobharat"
                                                    target="_blank" class="j-link" aria-label="Buy now JioBharat"><span
                                                        class="j-button j-button-size__small primary as-span"
                                                        role="button" aria-label="button"
                                                        style="--button-height-small: 40px; padding: var(--spacing-xs) var(--spacing-base);">
                                                        <div style="flex-basis: unset;">Buy now</div>
                                                    </span></a></div>
                                        </div>
                                    </div><span
                                        class="l-breakpoint--desktop sp--none pd--bottom j-Space__vertical j-Space"></span><span
                                        class="l-breakpoint--tablet sp--none pd--bottom j-Space__vertical j-Space"></span>
                                </div>
                            </div><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                        </section>
                    </section>
                    <section data-hydration-on-demand="true">
                        <section aria-label="Let's shape the future of your business together"
                            class="css-ivx8ta j-container"><span
                                class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                            <div class="j-container l-layout--max-width">
                                <div class="j-container sp--base pd--bottom">
                                    <div class="css-ghphoi j-contentBlock j-contentBlock__size-m">
                                        <div class="j-contentBlock__body">
                                            <div class="j-contentBlock__content">
                                                <div class="j-contentBlock__title">
                                                    <h2 class="j-heading j-text-heading-xs">Let's shape the future of
                                                        your business together</h2><span
                                                        class="sp--none pd--bottom j-Space__vertical j-Space"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="button-group"
                                class="jms-home-explorebusiness-buttongroup j-container sp--xl pd--bottom l-layout--max-width">
                                <div class="j-button-group css-dl4ejn" style="flex-direction: column;"><a
                                        href="https://www.jio.com/business" target="_self" class="j-link"
                                        aria-label="Explore all business"><span
                                            class="j-button j-button-size__medium tertiary as-span" role="button"
                                            aria-label="button">
                                            <div style="flex-basis: unset;">Explore all business</div>
                                        </span></a></div>
                            </div>
                        </section>
                    </section>
                    <span class="css-rfmomk"></span>
                    <section aria-label="Know what's up with Jio" class="css-s42wj2 j-container"><span
                            class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                        <div class="j-container l-layout--max-width">
                            <div class="j-container sp--base pd--bottom">
                                <div class="css-ghphoi j-contentBlock j-contentBlock__size-m"
                                    loganalytics="[object Object]">
                                    <div class="j-contentBlock__body">
                                        <div class="j-contentBlock__content">
                                            <div class="j-contentBlock__title">
                                                <h2 class="j-heading j-text-heading-xs">Know what's up with Jio</h2>
                                            </div>
                                            <div class="j-contentBlock__description">
                                                <div class="css-5o7vxj"><span class="j-text j-text-body-s"
                                                        style="--color-text:var(--color-primary-grey-80)">Connecting
                                                        everyone, with everything, everywhere, Jio is making waves in
                                                        India and around the world.</span><span
                                                        class="sp--none pd--bottom j-Space__vertical j-Space"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-testid="button-group"
                            class="jms-home-explore-buttongroup j-container sp--xl pd--bottom l-layout--max-width">
                            <div class="j-button-group css-dl4ejn" style="flex-direction: column;"><a
                                    href="https://www.jio.com/jcms/jiostories" target="_self" class="j-link"
                                    aria-label="Explore all stories"><span
                                        class="j-button j-button-size__medium tertiary as-span" role="button"
                                        aria-label="button">
                                        <div style="flex-basis:unset">Explore all stories</div>
                                    </span></a></div>
                        </div>
                        <div class="mobile j-container l-layout--full">

                        </div><span class="sp--l pd--bottom j-Space__vertical j-Space"></span>
                    </section>
                    <section data-hydration-on-demand="true">
                        <div class="css-12slmdo">
                            <div data-mode="bold"
                                class="j-rich-text j-container sp--huge pd--top l-layout--full bg--primary-background"
                                style="border-bottom:1px solid var(--color-primary-background)">
                                <div class="css-1vm0clh j-contentBlock j-contentBlock__size-l">
                                    <div class="j-contentBlock__body">
                                        <div class="j-contentBlock__content">
                                            <div class="j-contentBlock__title">
                                                <h2 class="j-heading j-text-heading-l">Need guidance?</h2>
                                            </div>
                                            <div class="j-contentBlock__description">
                                                <div class="css-5o7vxj">
                                                    <div class="j-text j-text-body-m"
                                                        style="--color-text:var(--color-primary-grey-80);padding-bottom:var(--spacing-l)">
                                                        We would love to help you.</div><span
                                                        class="sp--xs pd--bottom j-Space__vertical j-Space"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-testid="button-group"
                                class="home-ngs-buttons-container j-container sp--huge pd--bottom l-layout--full bg--primary-background"
                                data-mode="bold">
                                <div class="j-button-group css-weh5p"><a href="https://www.jio.com/help/home"
                                        target="_self" class="j-link" aria-label="Support"><span
                                            class="j-text j-text-body-s-bold j-button j-button-size__medium secondary icon-primary icon-primary-inline as-span"
                                            role="button" aria-label="button"><i class="j-button-icon icon-left"><svg
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19 4H5a3 3 0 00-3 3v8a3 3 0 003 3h3v1a2 2 0 003.2 1.6l3.47-2.6H19a3 3 0 003-3V7a3 3 0 00-3-3zm-7 12.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.32-4.62l-.33.24A1 1 0 0111 12a2.18 2.18 0 011.17-1.76c.56-.4.83-.61.83-1.24a1.17 1.17 0 00-1-1 1.17 1.17 0 00-1 1 1 1 0 01-2 0 3.16 3.16 0 013-3 3.16 3.16 0 013 3 3.31 3.31 0 01-1.68 2.88z"
                                                        fill="currentColor"></path>
                                                </svg></i>
                                            <div style="flex-basis:fit-content">Support</div>
                                        </span></a><a href="https://www.jio.com/help/home?source=campaign"
                                        target="_self" class="j-link" aria-label="Chat with us"><span
                                            class="j-text j-text-body-s-bold j-button j-button-size__medium secondary icon-primary icon-primary-inline as-span"
                                            role="button" aria-label="button"><i class="j-button-icon icon-left"><svg
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15 4H9a7 7 0 00-1 13.92V20a1.5 1.5 0 002.4 1.2l4.27-3.2H15a7 7 0 000-14zm-7 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
                                                        fill="currentColor"></path>
                                                </svg></i>
                                            <div style="flex-basis:fit-content">Chat with us</div>
                                        </span></a><a href="https://www.jio.com/help/contact-us?tab=call" target="_self"
                                        class="j-link" aria-label="Call us"><span
                                            class="j-text j-text-body-s-bold j-button j-button-size__medium secondary icon-primary icon-primary-inline as-span"
                                            role="button" aria-label="button"><i class="j-button-icon icon-left"><svg
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.27 15.73c3.74 3.75 7.07 3.85 8.48 3.68a1.89 1.89 0 001.13-.57l1-1a2 2 0 000-2.83l-.71-.71a2 2 0 00-2.82 0l-.71.71a.997.997 0 01-1.095.219.998.998 0 01-.325-.219L9 10.79a.999.999 0 010-1.42l.71-.71a2 2 0 000-2.82L9 5.13a2 2 0 00-2.83 0l-1 1a1.89 1.89 0 00-.57 1.13c-.18 1.4-.08 4.74 3.67 8.47z"
                                                        fill="currentColor"></path>
                                                </svg></i>
                                            <div style="flex-basis:fit-content">Call us</div>
                                        </span></a><a href="https://www.jio.com/selfcare/locate-us/" target="_self"
                                        class="j-link" aria-label="Find a store"><span
                                            class="j-text j-text-body-s-bold j-button j-button-size__medium secondary icon-primary icon-primary-inline as-span"
                                            role="button" aria-label="button"><i class="j-button-icon icon-left"><svg
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.12 5.88l-2.55-2.35A2 2 0 0017.22 3H6.78a2 2 0 00-1.35.53L2.88 5.88a3 3 0 004.24 4.24c.076-.082.146-.169.21-.26a3 3 0 004.67 0 3 3 0 004.67 0c.065.091.135.178.21.26a3 3 0 104.24-4.24zM7.34 12.42a5 5 0 01-4.34.16V18a3 3 0 003 3h5v-8.19a4.91 4.91 0 01-3.66-.39zm9.32 0a4.91 4.91 0 01-3.66.39V15h2a1 1 0 010 2h-2v4h5a3 3 0 003-3v-5.42a5 5 0 01-4.34-.16z"
                                                        fill="currentColor"></path>
                                                </svg></i>
                                            <div style="flex-basis:fit-content">Find a store</div>
                                        </span></a></div>
                            </div>
                        </div>
                    </section>
                    <section class="wrapperFooter j-container l-layout--full">
                        <div class="j-footer" marketplacelinks="2">
                            <section class="j-container l-layout--max-width">
                                <div class="j-footer-menu j-grid"
                                    style="--grid-template:2fr 1fr;--grid-template-tablet:1fr;--grid-template-mobile:1fr;--grid-gap:var(--spacing-base);--grid-align:start">
                                    <div class="j-footer-links">
                                        <section class="j-container l-breakpoint--desktop">
                                            <div class="j-grid"
                                                style="--grid-template:repeat(4, 1fr);--grid-gap:var(--spacing-base);--grid-align:start">
                                                <div class="group">
                                                    <div class="group__heading j-listBlock align-middle">
                                                        <div class="j-listBlock__main">
                                                            <div class="j-listBlock__block-root">
                                                                <div
                                                                    class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                    <div class="j-listBlock__block-text">
                                                                        <div class="j-text j-text-body-m">Our offerings
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><span
                                                        class="sp--s pd--bottom j-Space__vertical j-Space"></span>
                                                    <div class="group__links j-grid"
                                                        style="--grid-template:1fr;--grid-gap:0;--grid-align:center"><a
                                                            href="https://www.jio.com/mobile" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Mobile
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/fiber" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Fiber
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/business/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Business</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/jcms/apps/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Apps
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/jcms/devices/discover/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Devices</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/jioads/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">JioAds
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jiobook.com/" target="_blank"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    JioBook</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/5g" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">5G
                                                                                    Network</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div class="group">
                                                    <div class="group__heading j-listBlock align-middle">
                                                        <div class="j-listBlock__main">
                                                            <div class="j-listBlock__block-root">
                                                                <div
                                                                    class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                    <div class="j-listBlock__block-text">
                                                                        <div class="j-text j-text-body-m">Support</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><span
                                                        class="sp--s pd--bottom j-Space__vertical j-Space"></span>
                                                    <div class="group__links j-grid"
                                                        style="--grid-template:1fr;--grid-gap:0;--grid-align:center"><a
                                                            href="https://www.jio.com/help/home" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Explore Support</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/locate-us/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Locate
                                                                                    us</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/help/faq" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">FAQ
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/en-in/track-order"
                                                            target="_self" class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Track
                                                                                    order</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/help/contact-us#/"
                                                            target="_self" class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Contact us</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div class="group">
                                                    <div class="group__heading j-listBlock align-middle">
                                                        <div class="j-listBlock__main">
                                                            <div class="j-listBlock__block-root">
                                                                <div
                                                                    class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                    <div class="j-listBlock__block-text">
                                                                        <div class="j-text j-text-body-m">Our company
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><span
                                                        class="sp--s pd--bottom j-Space__vertical j-Space"></span>
                                                    <div class="group__links j-grid"
                                                        style="--grid-template:1fr;--grid-gap:0;--grid-align:center"><a
                                                            href="https://www.ril.com/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Reliance Industries</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://reliancefoundation.org/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Reliance Foundation</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/jcms/jiostories/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    JioLife</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://careers.jio.com/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Careers</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="https://www.jio.com/en-in/investor-relations"
                                                            target="_self" class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Investor relations</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                                <div class="group">
                                                    <div class="group__heading j-listBlock align-middle">
                                                        <div class="j-listBlock__main">
                                                            <div class="j-listBlock__block-root">
                                                                <div
                                                                    class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                    <div class="j-listBlock__block-text">
                                                                        <div class="j-text j-text-body-m">Useful links
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div><span
                                                        class="sp--s pd--bottom j-Space__vertical j-Space"></span>
                                                    <div class="group__links j-grid"
                                                        style="--grid-template:1fr;--grid-gap:0;--grid-align:center"><a
                                                            href="/selfcare/interest/airfiber/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Get
                                                                                    JioAirFiber</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/interest/sim/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Get
                                                                                    Jio SIM</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/choice-number/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Choice
                                                                                    number</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/recharge/mobility/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Recharge</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/paybill/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Pay
                                                                                    Bills</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/selfcare/login/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">Login
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a><a href="/jcms/sitemap/" target="_self"
                                                            class="j-link group__link" tabindex="0">
                                                            <div class="j-listBlock align-middle">
                                                                <div class="j-listBlock__main">
                                                                    <div class="j-listBlock__block-root">
                                                                        <div
                                                                            class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                            <div class="j-listBlock__block-text">
                                                                                <div class="j-text j-text-body-m">
                                                                                    Sitemap</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </section>
                                        <section class="j-container l-breakpoint--tablet">
                                            <div class="j-footer-links__accordion">
                                                <div class="j-accordion-panel" role="tablist" aria-expanded="false">
                                                    <button type="button" class="j-accordion-panel__header-trigger"
                                                        role="tab">
                                                        <div class="j-accordion-panel__header j-listBlock align-middle">
                                                            <div class="j-listBlock__main">
                                                                <div class="j-listBlock__block-root">
                                                                    <div
                                                                        class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                        <div class="j-listBlock__block-text">
                                                                            <div class="j-text j-text-body-m">Our
                                                                                offerings</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="j-listBlock__suffix"><span
                                                                        class="j-accordion-panel-icn j-button j-button-size__medium tertiary icon-primary icon-only as-span"
                                                                        role="button" aria-label="button">
                                                                        <div style="flex-basis:fit-content"></div><i
                                                                            class="j-button-icon"><svg
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></i>
                                                                    </span></div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="j-accordion-panel__inner" style="height:0px"
                                                        aria-hidden="true">
                                                        <div class="j-accordion-panel-content"><a
                                                                href="https://www.jio.com/mobile" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Mobile</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/fiber" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Fiber</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/business/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Business</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/jcms/apps/" target="_self" class="j-link"
                                                                tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Apps</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/jcms/devices/discover/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Devices</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/jioads/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        JioAds</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jiobook.com/" target="_blank"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        JioBook</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/5g" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">5G
                                                                                        Network</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div class="j-accordion-panel" role="tablist" aria-expanded="false">
                                                    <button type="button" class="j-accordion-panel__header-trigger"
                                                        role="tab">
                                                        <div class="j-accordion-panel__header j-listBlock align-middle">
                                                            <div class="j-listBlock__main">
                                                                <div class="j-listBlock__block-root">
                                                                    <div
                                                                        class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                        <div class="j-listBlock__block-text">
                                                                            <div class="j-text j-text-body-m">Support
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="j-listBlock__suffix"><span
                                                                        class="j-accordion-panel-icn j-button j-button-size__medium tertiary icon-primary icon-only as-span"
                                                                        role="button" aria-label="button">
                                                                        <div style="flex-basis:fit-content"></div><i
                                                                            class="j-button-icon"><svg
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></i>
                                                                    </span></div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="j-accordion-panel__inner" style="height:0px"
                                                        aria-hidden="true">
                                                        <div class="j-accordion-panel-content"><a
                                                                href="https://www.jio.com/help/home" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Explore Support</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/locate-us/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Locate us</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/help/faq" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        FAQ</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/en-in/track-order"
                                                                target="_self" class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Track order</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/help/contact-us#/"
                                                                target="_self" class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Contact us</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div class="j-accordion-panel" role="tablist" aria-expanded="false">
                                                    <button type="button" class="j-accordion-panel__header-trigger"
                                                        role="tab">
                                                        <div class="j-accordion-panel__header j-listBlock align-middle">
                                                            <div class="j-listBlock__main">
                                                                <div class="j-listBlock__block-root">
                                                                    <div
                                                                        class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                        <div class="j-listBlock__block-text">
                                                                            <div class="j-text j-text-body-m">Our
                                                                                company</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="j-listBlock__suffix"><span
                                                                        class="j-accordion-panel-icn j-button j-button-size__medium tertiary icon-primary icon-only as-span"
                                                                        role="button" aria-label="button">
                                                                        <div style="flex-basis:fit-content"></div><i
                                                                            class="j-button-icon"><svg
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></i>
                                                                    </span></div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="j-accordion-panel__inner" style="height:0px"
                                                        aria-hidden="true">
                                                        <div class="j-accordion-panel-content"><a
                                                                href="https://www.ril.com/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Reliance Industries</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://reliancefoundation.org/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Reliance Foundation</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/jcms/jiostories/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        JioLife</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://careers.jio.com/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Careers</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="https://www.jio.com/en-in/investor-relations"
                                                                target="_self" class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Investor relations</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                                <div class="j-accordion-panel" role="tablist" aria-expanded="false">
                                                    <button type="button" class="j-accordion-panel__header-trigger"
                                                        role="tab">
                                                        <div class="j-accordion-panel__header j-listBlock align-middle">
                                                            <div class="j-listBlock__main">
                                                                <div class="j-listBlock__block-root">
                                                                    <div
                                                                        class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                        <div class="j-listBlock__block-text">
                                                                            <div class="j-text j-text-body-m">Useful
                                                                                links</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="j-listBlock__suffix"><span
                                                                        class="j-accordion-panel-icn j-button j-button-size__medium tertiary icon-primary icon-only as-span"
                                                                        role="button" aria-label="button">
                                                                        <div style="flex-basis:fit-content"></div><i
                                                                            class="j-button-icon"><svg
                                                                                viewBox="0 0 24 24" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M20 11h-7V4a1 1 0 00-2 0v7H4a1 1 0 000 2h7v7a1 1 0 002 0v-7h7a1 1 0 000-2z"
                                                                                    fill="currentColor"></path>
                                                                            </svg></i>
                                                                    </span></div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <div class="j-accordion-panel__inner" style="height:0px"
                                                        aria-hidden="true">
                                                        <div class="j-accordion-panel-content"><a
                                                                href="/selfcare/interest/airfiber/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Get JioAirFiber</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/interest/sim/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Get Jio SIM</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/choice-number/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Choice number</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/recharge/mobility/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Recharge</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/paybill/" target="_self"
                                                                class="j-link" tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Pay Bills</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/selfcare/login/" target="_self" class="j-link"
                                                                tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Login</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a><a href="/jcms/sitemap/" target="_self" class="j-link"
                                                                tabindex="0">
                                                                <div class="j-listBlock align-middle">
                                                                    <div class="j-listBlock__main">
                                                                        <div class="j-listBlock__block-root">
                                                                            <div
                                                                                class="j-listBlock__block j-listBlock__block-titleBlock">
                                                                                <div class="j-listBlock__block-text">
                                                                                    <div class="j-text j-text-body-m">
                                                                                        Sitemap</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div class="j-footer-social">
                                        <div>
                                            <h3 class="j-heading j-text-heading-xs">Connect with Us</h3><span
                                                class="sp--base pd--bottom j-Space__vertical j-Space"></span>
                                            <div class="items"><a href="https://twitter.com/reliancejio" target="_self"
                                                    class="j-link" aria-label="Twitter"><span
                                                        class="j-button j-button-size__small primary icon-primary icon-only as-span"
                                                        role="button" aria-label="button">
                                                        <div style="flex-basis:fit-content"></div><i
                                                            class="j-button-icon"><svg viewBox="0 0 24 24"
                                                                aria-label="Twitter" role="img"
                                                                class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                                                <g>
                                                                    <path
                                                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                                                        fill="#FFF"></path>
                                                                </g>
                                                            </svg></i>
                                                    </span></a><a href="https://www.instagram.com/reliancejio/"
                                                    target="_self" class="j-link" aria-label="Instagram"><span
                                                        class="j-button j-button-size__small primary icon-primary icon-only as-span"
                                                        role="button" aria-label="button">
                                                        <div style="flex-basis:fit-content"></div><i
                                                            class="j-button-icon"><svg viewBox="0 0 40 40" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">

                                                                <path
                                                                    d="M20.007 11.202c-0.001 0-0.001 0-0.002 0-4.856 0-8.793 3.937-8.793 8.793s3.937 8.793 8.793 8.793c4.856 0 8.793-3.937 8.793-8.793 0-0.001 0-0.001 0-0.002v0c-0.007-4.853-3.939-8.785-8.791-8.792h-0.001zM24.462 24.45c-1.14 1.141-2.716 1.846-4.457 1.846-3.48 0-6.302-2.821-6.302-6.302s2.821-6.302 6.302-6.302c3.48 0 6.301 2.821 6.302 6.3v0c0 0.005 0 0.010 0 0.016 0 1.735-0.705 3.306-1.845 4.441l-0 0z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M37.362 12.663c-0.295-6.27-3.762-9.737-10.025-10.025-1.5-0.070-4.202-0.112-7.225-0.112-3.080 0-5.86 0.042-7.435 0.112-0.077-0.002-0.167-0.003-0.258-0.003-2.709 0-5.171 1.060-6.994 2.788l0.005-0.004c-2.963 2.962-2.935 6.965-2.897 12.5 0 0.667 0.010 1.357 0.010 2.070 0 0.667 0 1.313 0 1.938-0.033 5.833-0.053 9.692 2.893 12.638 2.693 2.692 6.267 2.907 10.667 2.907 0.573 0 1.167 0 1.773-0.010h0.057c0.667 0 1.368-0.010 2.087-0.010h0.195c6.545 0 9 0 11.348-0.912 3.588-1.393 5.598-4.582 5.812-9.222 0.137-3.185 0.137-11.275-0.013-14.655zM32.802 32.81c-2.062 2.062-4.788 2.167-9.833 2.167h-4.932c-6.058 0-8.825-0.088-10.908-2.177-2.262-2.252-2.225-5.667-2.167-10.407 0-0.765 0.017-1.568 0.017-2.412 0-0.69 0-1.365-0.012-2.022v-0.070c-0.065-7.205-0.113-12.412 7.758-12.815 1.132-0.040 3.5-0.048 5.285-0.048 1.585 0 1.947 0 2.030 0.022l-0.018-0.018q1.017 0 2-0.012h0.105c0.587 0 1.167-0.012 1.72-0.012 6.060 0 10.722 0.573 11.048 7.778 0.087 1.91 0.105 2.48 0.105 7.22v1.24c-0.013 6.428-0.012 9.368-2.198 11.565z"
                                                                    fill="currentColor"></path>
                                                                <path
                                                                    d="M29.52 8.702c-0.001 0-0.001 0-0.002 0-0.983 0-1.78 0.797-1.78 1.78s0.797 1.78 1.78 1.78c0.983 0 1.78-0.797 1.78-1.78v0c-0.001-0.982-0.796-1.778-1.778-1.78h-0z"
                                                                    fill="currentColor"></path>

                                                            </svg></i>
                                                    </span></a><a href="https://www.facebook.com/Jio" target="_self"
                                                    class="j-link" aria-label="Facebook"><span
                                                        class="j-button j-button-size__small primary icon-primary icon-only as-span"
                                                        role="button" aria-label="button">
                                                        <div style="flex-basis:fit-content"></div><i
                                                            class="j-button-icon"><svg viewBox="0 0 22 22" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.25995 21.1098C4.67495 20.7198 0.589946 15.7948 0.764946 10.9198C0.969946 5.19977 5.38495 0.884766 11.0349 0.884766C16.4749 0.884766 21.0249 5.18976 21.2349 10.5698C21.4799 16.7648 16.7199 20.6298 12.7449 21.1198C12.7449 18.7548 12.7449 16.3998 12.7449 13.9648C13.4749 13.9648 14.2349 13.9648 15.0599 13.9648C15.2199 13.0048 15.3749 12.1048 15.5349 11.1298C14.5899 11.1298 13.6949 11.1298 12.7199 11.1298C12.6749 10.2198 12.5699 9.36977 12.8249 8.53977C13.0049 7.94477 13.5099 7.72477 14.0899 7.69477C14.5349 7.66976 14.9849 7.68976 15.4749 7.68976C15.4749 6.79476 15.4749 5.96477 15.4749 5.09977C14.1749 4.85477 12.8849 4.67477 11.6049 5.14977C10.2099 5.66477 9.34995 6.96477 9.31495 8.59977C9.29495 9.40977 9.30995 10.2198 9.30995 11.0948C8.43995 11.0948 7.63495 11.0948 6.78995 11.0948C6.78995 12.0498 6.78995 12.9448 6.78995 13.9048C7.60495 13.9048 8.40995 13.9048 9.25995 13.9048C9.25995 16.3298 9.25995 18.6948 9.25995 21.1098Z"
                                                                    fill="currentColor"></path>
                                                            </svg></i>
                                                    </span></a><a
                                                    href="https://www.youtube.com/channel/UC7x7gqeQQ5dazPAvDgC7TIw"
                                                    target="_self" class="j-link" aria-label="YouTube"><span
                                                        class="j-button j-button-size__small primary icon-primary icon-only as-span"
                                                        role="button" aria-label="button">
                                                        <div style="flex-basis:fit-content"></div><i
                                                            class="j-button-icon"><svg viewBox="0 0 40 40" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M20.012 34.070c-0.095 0-10.435-0.098-13.598-0.407-0.115-0.023-0.247-0.038-0.4-0.055l-0.137-0.017c-1.51-0.051-2.867-0.664-3.877-1.635l0.002 0.002c-0.821-1.113-1.385-2.464-1.58-3.931l-0.005-0.044v-0.020c-0.239-1.917-0.385-4.158-0.405-6.428l-0-0.027v-3.030c0.020-2.297 0.166-4.538 0.433-6.741l-0.028 0.286v-0.020c0.2-1.508 0.764-2.855 1.602-3.988l-0.017 0.023c0.959-0.984 2.28-1.611 3.746-1.666l0.010-0h0.010c0.057 0 0.11 0 0.167-0.013l0.088-0.010c5.5-0.4 13.902-0.407 13.987-0.407h0.022c0.085 0 8.478 0 14 0.407l0.092 0.010c0.048 0 0.102 0.010 0.157 0.013h0.010c1.474 0.056 2.792 0.684 3.747 1.665l0.001 0.001c0.819 1.111 1.383 2.457 1.58 3.921l0.005 0.044v0.020c0.239 1.917 0.385 4.158 0.405 6.428l0 0.027v3.030c-0.020 2.297-0.166 4.538-0.433 6.741l0.028-0.286v0.020c-0.2 1.511-0.765 2.861-1.602 3.999l0.017-0.024c-0.956 0.983-2.274 1.61-3.738 1.666l-0.010 0h-0.010c-0.055 0-0.107 0-0.158 0.013l-0.090 0.010c-5.532 0.395-13.947 0.422-14.020 0.422zM15.885 13.947v11.24l10.805-5.602z"
                                                                    fill="currentColor"></path>
                                                            </svg></i>
                                                    </span></a><a
                                                    href="https://in.linkedin.com/company/jio?trk=nav_type_overview"
                                                    target="_self" class="j-link" aria-label="LinkedIn"><span
                                                        class="j-button j-button-size__small primary icon-primary icon-only as-span"
                                                        role="button" aria-label="button">
                                                        <div style="flex-basis:fit-content"></div><i
                                                            class="j-button-icon"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" viewBox="0 0 16 16" fill="none">
                                                                <path
                                                                    d="M13.1 1.99998H2.9C2.78356 1.99822 2.66791 2.01941 2.55966 2.06234C2.45141 2.10528 2.35267 2.16912 2.2691 2.25022C2.18552 2.33132 2.11874 2.42809 2.07257 2.535C2.0264 2.64191 2.00174 2.75687 2 2.87331V13.1266C2.00174 13.2431 2.0264 13.358 2.07257 13.465C2.11874 13.5719 2.18552 13.6686 2.2691 13.7497C2.35267 13.8308 2.45141 13.8947 2.55966 13.9376C2.66791 13.9806 2.78356 14.0017 2.9 14H13.1C13.2164 14.0017 13.3321 13.9806 13.4403 13.9376C13.5486 13.8947 13.6473 13.8308 13.7309 13.7497C13.8145 13.6686 13.8813 13.5719 13.9274 13.465C13.9736 13.358 13.9983 13.2431 14 13.1266V2.87331C13.9983 2.75687 13.9736 2.64191 13.9274 2.535C13.8813 2.42809 13.8145 2.33132 13.7309 2.25022C13.6473 2.16912 13.5486 2.10528 13.4403 2.06234C13.3321 2.01941 13.2164 1.99822 13.1 1.99998ZM5.55333 12.2266H3.8V6.52665H5.55333V12.2266ZM4.7 5.72665C4.42003 5.72489 4.15212 5.61243 3.95477 5.41383C3.75742 5.21523 3.64666 4.94662 3.64667 4.66665C3.64482 4.52843 3.67091 4.39127 3.72336 4.26338C3.77582 4.13549 3.85356 4.01951 3.95192 3.92239C4.05028 3.82528 4.16724 3.74902 4.29579 3.6982C4.42433 3.64738 4.56182 3.62304 4.7 3.62665C4.96403 3.6477 5.21043 3.76745 5.39012 3.96204C5.56982 4.15663 5.6696 4.41178 5.6696 4.67665C5.6696 4.94151 5.56982 5.19666 5.39012 5.39125C5.21043 5.58584 4.96403 5.70559 4.7 5.72665ZM12.3 12.1733H10.5V9.37331C10.5 8.70665 10.5 7.82665 9.55333 7.82665C8.60667 7.82665 8.5 8.57331 8.5 9.27331V12.1266H6.74667V6.52665H8.4V7.27331H8.44667C8.62601 6.98385 8.87628 6.74497 9.17378 6.5793C9.47128 6.41364 9.80615 6.32667 10.1467 6.32665C11.9467 6.32665 12.3 7.52665 12.3 9.07331V12.1733Z"
                                                                    fill="white"></path>
                                                                <script xmlns=""></script>
                                                            </svg></i>
                                                    </span></a></div>
                                        </div>
                                        <div class="j-footer-social__marketplace">
                                            <h3 class="j-heading j-text-heading-xs">Download MyJio</h3><span
                                                class="sp--base pd--bottom j-Space__vertical j-Space"></span>
                                            <div class="stores"><a
                                                    href="https://play.google.com/store/apps/details?id=com.jio.myjio"
                                                    target="_self" class="j-link store" aria-label="play-store"
                                                    arialabel="play-store"><img alt="play-store"
                                                        src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg"></a><a
                                                    href="https://apps.apple.com/us/app/myjio/id1074964262"
                                                    target="_self" class="j-link store" aria-label="app-store"
                                                    arialabel="app-store"><img alt="app-store"
                                                        src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <footer class="j-footer-legals">
                                <section class="j-footer-legals__content j-container l-layout--max-width">
                                    <div class="j-footer-legals__content__logo">
                                        <section data-mode="light" class="j-container l-layout--flex"><span
                                                class="j-icon" style="--icon-size-svg:100%;--icon-size:2rem"><svg
                                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    color="var(--color-secondary-50)">
                                                    <g clip-path="url(#ic_jio_dot_svg__clip0_5207_79934)">
                                                        <rect width="24" height="24" rx="12" fill="currentColor"></rect>
                                                        <path
                                                            d="M8.478 7.237h-.4c-.76 0-1.174.428-1.174 1.285v4.129c0 1.063-.359 1.436-1.201 1.436-.663 0-1.202-.29-1.63-.815-.041-.055-.91.36-.91 1.381 0 1.105 1.034 1.782 2.955 1.782 2.333 0 3.563-1.174 3.563-3.742V8.521c-.002-.856-.416-1.285-1.203-1.285zm9.3 2.017c-2.265 0-3.77 1.436-3.77 3.577 0 2.196 1.45 3.605 3.728 3.605 2.265 0 3.756-1.409 3.756-3.59.001-2.156-1.477-3.592-3.714-3.592zm-.028 5.15c-.884 0-1.491-.648-1.491-1.574 0-.91.622-1.56 1.491-1.56.87 0 1.491.65 1.491 1.574 0 .898-.634 1.56-1.49 1.56zm-5.656-5.082h-.277c-.676 0-1.187.318-1.187 1.285v4.419c0 .98.497 1.285 1.215 1.285h.277c.676 0 1.16-.332 1.16-1.285v-4.42c0-.993-.47-1.284-1.188-1.284zm-.152-3.203c-.856 0-1.395.484-1.395 1.243 0 .773.553 1.256 1.436 1.256.857 0 1.395-.483 1.395-1.256s-.552-1.243-1.436-1.243z"
                                                            fill="#fff"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="ic_jio_dot_svg__clip0_5207_79934">
                                                            <path fill="#fff" d="M0 0h24v24H0z"></path>
                                                        </clipPath>
                                                    </defs>
                                                </svg></span></section>
                                    </div>
                                    <div class="j-footer-legals__content__copyright">
                                        <div class="j-text j-text-body-xxs"
                                            style="--color-text:var(--color-primary-grey-80)">Copyright © 2024 Reliance
                                            Jio Infocomm Ltd. All rights reserved.</div>
                                    </div>
                                    <div class="j-footer-legals__content__bottom-links">
                                        <div class="j-text j-text-body-xxs"
                                            style="--color-text:var(--color-primary-grey-80)"><a
                                                href="/jcms/press-release/" target="_self" class="j-link is-text">Press
                                                release</a></div>
                                        <div class="j-Divider_vr_container sp--xs pd--horizontal" style="height:1rem">
                                            <div class="j-Divider_vr_container__vr" role="separator"></div>
                                        </div>
                                        <div class="j-text j-text-body-xxs"
                                            style="--color-text:var(--color-primary-grey-80)"><a
                                                href="/jcms/en-in/regulatory/" target="_self"
                                                class="j-link is-text">Regulatory</a></div>
                                        <div class="j-Divider_vr_container sp--xs pd--horizontal" style="height:1rem">
                                            <div class="j-Divider_vr_container__vr" role="separator"></div>
                                        </div>
                                        <div class="j-text j-text-body-xxs"
                                            style="--color-text:var(--color-primary-grey-80)"><a
                                                href="/jcms/en-in/jio-privacy-policy/" target="_self"
                                                class="j-link is-text">Policies</a></div>
                                        <div class="j-Divider_vr_container sp--xs pd--horizontal" style="height:1rem">
                                            <div class="j-Divider_vr_container__vr" role="separator"></div>
                                        </div>
                                        <div class="j-text j-text-body-xxs"
                                            style="--color-text:var(--color-primary-grey-80)"><a
                                                href="/jcms/en-in/terms-conditions/" target="_self"
                                                class="j-link is-text">Terms &amp; conditions</a></div>
                                    </div>
                                </section>
                            </footer>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    </div>
    <next-route-announcer>
        <p aria-live="assertive" id="__next-route-announcer__" role="alert"
            style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 1px; white-space: nowrap; overflow-wrap: normal;">
        </p>
    </next-route-announcer>
</body>

</html>`
    return (<>

        <span dangerouslySetInnerHTML={{
            __html: ` <div class="mobile-header" style="
    height: 72px;
    background: var(--color-primary-50);
    display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;"><span class="menu-button j-icon" style="--icon-size-svg: 100%; --icon-size: 1.5rem;
            padding: 0px;
            color: white;"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4 7h16a1 1 0 100-2H4a1 1 0 000 2zm16 10H4a1 1 0 000 2h16a1 1 0 000-2zm0-6H4a1 1 0 000 2h16a1 1 0 000-2z"
                    fill="currentColor"></path>
            </svg></span><span class="app-logo j-icon" style="--icon-size-svg: 100%; --icon-size: 2.5rem;">
            <div class="header_logo-group override_logo"><a href="/" class="j-link" aria-label="Jio header logo"
                    tabindex="0">
                    <section data-mode="light" class="header_logo-group-logo j-container"><span class="j-icon"><svg
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="currentColor"></rect>
                                <path
                                    d="M17.587 14.559c-.883 0-1.49-.648-1.49-1.574 0-.912.62-1.56 1.49-1.56s1.491.648 1.491 1.573c0 .897-.634 1.56-1.49 1.56zm.03-5.152c-2.265 0-3.772 1.437-3.772 3.576 0 2.195 1.451 3.604 3.729 3.604 2.264 0 3.755-1.409 3.755-3.59 0-2.153-1.475-3.59-3.713-3.59zM11.78 6.272c-.856 0-1.395.483-1.395 1.243 0 .774.552 1.257 1.435 1.257.857 0 1.395-.483 1.395-1.257 0-.773-.552-1.243-1.435-1.243zm.152 3.204h-.277c-.675 0-1.187.317-1.187 1.285v4.42c0 .98.496 1.284 1.216 1.284h.275c.677 0 1.16-.33 1.16-1.285v-4.419c0-.995-.47-1.285-1.187-1.285zM8.316 7.392h-.4c-.76 0-1.174.43-1.174 1.285v4.13c0 1.063-.36 1.436-1.2 1.436-.662 0-1.201-.29-1.63-.816C3.87 13.373 3 13.786 3 14.81c0 1.104 1.035 1.781 2.955 1.781 2.334 0 3.563-1.173 3.563-3.742V8.675c0-.856-.413-1.283-1.202-1.283z"
                                    fill="#fff"></path>
                            </svg></span></section>
                </a></div>
        </span>
        <div class="header_spacer"></div>
        <section data-mode="light" class="j-container" style="
    width: 54%;">
            <div class="search j-search-box has-prefix" style="
                left: 0%;
    
                margin-right: 3%;"><span class="input-icon input-icon-prefix" tabindex="-1"><svg viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.004 2a7 7 0 015.6 11.19l6.11 6.1a1.002 1.002 0 01-.325 1.639.999.999 0 01-1.095-.219l-6.1-6.11A7 7 0 1110.004 2zm0 12a5 5 0 100-10 5 5 0 000 10z"
                            fill="currentColor"></path>
                    </svg></span><input id="open-search" type="search" aria-label="Search" placeholder="Search"
                    class="search" value=""></div>
            <div class="SearchUI_searchPanel__Lsd_V">
                <div class="input-val j-field input-text input-has-suffix" style="left: 0%;">
                    <span class="input-icon input-icon-suffix">
                        <div class="loader-container" style="right: 12px;"></div>
                    </span><input type="text" placeholder="Search" rows="1" value="">
                </div>
            </div>
            <div class="SearchUI_zFront__6Uy2T"></div>
        </section>
        <section data-mode="light" class="j-container" style="padding-left: 8px;"><span
                class="customsize j-icon j-icon__bg"
                style="--icon-size-svg: 1.5rem; --icon-size: 2rem; --icon-color: var(--color-secondary-50); --icon-bg: var(--color-secondary-20);"><svg
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" kind="background"
                    class="profile-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 6a4 4 0 11-8 0 4 4 0 018 0zm4 10.5c0 3.038-3.582 5.5-8 5.5s-8-2.462-8-5.5S7.582 11 12 11s8 2.462 8 5.5z"
                        fill="currentColor"></path>
                </svg></span></section>
    </div>
    <h1 style="display:none" class="j-visually-hidden">Entertainment just leveled up</h1>
    ` }} />

        <div className="">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                {bootstrap.map((item) => (
                    <Carousel.Item key={item.id} interval={4000}>
                        <img src={item.imageUrl} alt="slides" className='' style={{
                            height: "400px",
                            objectFit: "fill"
                        }} />
                    </Carousel.Item>
                ))}
            </Carousel>
            <span dangerouslySetInnerHTML={{ __html: data }} />
        </div>
    </>
    )
}

export default Home