import React, { useEffect } from 'react';
import './section.css';
import tele from '../public/tele.jpeg';
import ReactECharts from 'echarts-for-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

import OpinionTag from '../components/OpinionTag.jsx';
import { color } from 'echarts';

const Producto = () => {

    const getOptionPie = () => {
        return {
            title: {
                text: 'Palabras positivas',
                subtext: 'Cantidad',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 400, name: 'buena' },
                        { value: 735, name: 'excelente' },
                        { value: 580, name: 'grande' },
                        { value: 484, name: 'calidad de audio' },
                        { value: 1000, name: 'buen sonido' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };
    };

    const getOptionPie2 = () => {
        return {
            title: {
                text: 'Palabras negativas',
                subtext: 'Cantidad',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };
    };

    // Define event handlers as an object
    const EventsDict = {
        click: (params) => {
            console.log('Click event:', params);
        },
        // Add more event handlers if needed
    };

    // Define the getOption function to provide ECharts options
    const getOption1 = () => {
        // Replace this with your actual ECharts options
        return {
            title: {
                text: 'Palabras positivas',
            },
            xAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [10, 20, 30, 40, 50],
                    type: 'bar',
                },
            ],
        };
    };
    const getOption2 = () => {
        // Replace this with your actual ECharts options
        return {
            title: {
                text: 'Palabras más repetidas',
            },
            xAxis: {
                type: 'category',
                data: ['A', 'B', 'C', 'D', 'E'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [10, 20, 30, 40, 50],
                    type: 'bar',
                },
            ],
        };
    };


    // Define the onChartReadyCallback function
    const onChartReadyCallback = (chart) => {
        // You can perform additional actions when the chart is ready
        console.log('Chart is ready:', chart);
    };

    return (
        <Fullpage>

            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>

                    <div className='rounded' style={{ height: '1000px', width: 'full' }}>
                        <div className='text-dark font-bold' style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1>Television LG</h1>
                        </div>

                        <div className='container'>

                            <div className='text-dark p-4 '>
                                <div className='row' style={{ width: "1300px", height: "300px" }}>
                                    <div className='col-sm'>
                                        <div className='card rounded'>
                                            <div className='card-body'>
                                                <ReactECharts
                                                    style={{ height: '250px' }}
                                                    option={getOptionPie()} // Use the getOption function to get ECharts options
                                                    notMerge={true}
                                                    lazyUpdate={true}
                                                    theme={'theme_name'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm'>
                                        <div className='card rounded'>
                                            <div className='card-body'>
                                                <ReactECharts
                                                    style={{ height: '250px' }}
                                                    option={getOptionPie2()} // Use the getOption function to get ECharts options
                                                    notMerge={true}
                                                    lazyUpdate={true}
                                                    theme={'theme_name'}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='text-dark row'>
                                <div className='col px-5'>
                                    <div className='shadow bg-white text-center'>
                                        <img src={tele} alt="" height={300} width={300} />
                                        <p >Television LG</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="card rounded h-full">
                                        <div className="card-body h-full">
                                            <ReactECharts
                                                style={{ height: "250px" }}
                                                option={getOption2()} // Use the getOption function to get ECharts options
                                                notMerge={true}
                                                lazyUpdate={true}
                                                theme={"theme_name"}
                                                onChartReady={onChartReadyCallback} // Use the onChartReadyCallback function
                                                onEvents={EventsDict}
                                                opts={{ renderer: 'svg' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >

                </FullpageSection>

                <FullpageSection style={{ position: "relative" }}>

                    <div className='container-fluid p-0 m-0' style={{ position: "relative", overflowX: "hidden" }}>
                        <div className='container-fluid' style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            zIndex: "-1"
                        }}>
                        </div>
                        <div className='container'>
                            <div className='chat-container row p-5 gap-5'>
                                <div className='col'>
                                    <textarea className='w-100 bg-white rounded shadow' style={{ resize: "none", height: "400px" }} />
                                    <p className='text-muted'>Reseña positiva usando opiniones de clientes</p>
                                </div>
                                <div className='col'>
                                    <textarea className='w-100 bg-white rounded shadow' style={{ resize: "none", height: "400px" }} />
                                    <p className='text-muted'>Reseña negativa usando opiniones de clientes</p>
                                </div>
                            </div>
                            <div className='w-100 d-flex justify-content-center align-items-center flex-wrap row-gap-3 opacity-75'>
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                                <OpinionTag texto="buena calidad" />
                            </div>
                        </div>
                    </div>

                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
};

export default Producto;
