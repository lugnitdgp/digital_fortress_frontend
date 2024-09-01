'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Ford",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "UFC",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "Lincoln",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Royal Caribbean",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "Sleepiq",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8
    },
    {
        title: "NFL",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8
    },
        {
        title: "Carnival",
        description: "Designed the future of the Carnival Cruise experience without ever being on a cruise.",
        speed: 0.8
    },
    {
        title: "FIFA",
        description: "Designed the future of the FIFA World Cup experience without being a soccer fan.",
        speed: 0.8
    },
    {
        title: "MGM",
        description: "Designed the future of the MGM Grand experience without ever being in Las Vegas.",
        speed: 0.8
    },
    {
        title: "Nike",
        description: "Designed the future of the Nike Ecosystem without being a fan of running.",
        speed: 0.8
    },
        {
        title: "NBA",
        description: "Designed the future of the NBA experience without being a basketball fan.",
        speed: 0.8
    },
    {
        title: "Pepsi",
        description: "Designed the future of the Pepsi experience without being a soda drinker.",
        speed: 0.8
    },
    {
        title: "Audi",
        description: "Designed the future of the Audi experience without ever owning an Audi.",
        speed: 0.8
    },
    {
        title: "VW",
        description: "Designed the future of the VW experience without ever owning a VW.",
        speed: 0.8
    },
    {
        title: "HBO",
        description: "Designed the future of the HBO experience without being a fan of TV.",
        speed: 0.8
    },
    {
        title: "Disney",
        description: "Designed the future of the Disney experience without being a fan of Disney.",
        speed: 0.8
    },
    {
        title: "Amazon",
        description: "Designed the future of the Amazon experience without being a fan of shopping.",
        speed: 0.8
    },
    {
        title: "Google",
        description: "Designed the future of the Google experience without being a fan of search.",
        speed: 0.8
    },
    {
        title: "Apple",
        description: "Designed the future of the Apple experience without being a fan of tech.",
        speed: 0.8
    },
    {
        title: "Microsoft",
        description: "Designed the future of the Microsoft experience without being a fan of Windows.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}