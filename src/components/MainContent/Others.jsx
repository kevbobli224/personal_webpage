import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip
} from 'recharts';
import { useRef, useEffect, useState } from "react";

const skillData = [
    { skill: 'Python', level: 90, note: "I'm fairly well-versed in Python, and able to manipulate large datasets using pandas and numpy, and conduct analysis/modelling using scikit" },
    { skill: 'R', level: 95, note: "I work with R on a daily-basis, from manipulating dataframes, to generating figures using ggplot2. I can even write custom functions for custom plotting functionalities" },
    { skill: 'Bash', level: 95, note: "I can navigate the Linux environment using just Bash. Good enough to write a simple pipeline inside a Linux terminal without explicitly writing it in a .sh file and executing it. If I have 72-cores on the server, I can write a GNU parallel command to make sure the analysis can be conducted as fast as possible" },
    { skill: 'Perl', level: 75, note: "I've written scripts in Perl and I know the syntaxes well enough, for example: extracting the desired gene sequence from a .gbk file" },
    { skill: 'Rust', level: 85, note: "One of my more favourite language to play with, in my own time I build simple applications in Rust. I've built a network scanner in Rust and compiled it on my Raspberry Pi 5" },
    { skill: 'C', level: 80, note: "Another one of my favourite language, used it for reverse engineering and accessing pointers by hooking a different application" },
    { skill: 'Java', level: 85, note: "A straight-forward language that I don't mind programming with, I've wrote a really extensive mobile application with Java during my undergrad" },
    { skill: 'JS-variants', level: 80, note: "I've built this webpage without using any starter templates using Vite + Tailwind + React. I've also written custom Javascript for one of my undergrad projects, allowing for interactive viewing of gene set over-representation enrichment analysis" }
];
const skillData2 = [
    { skill: 'English', level: 90, note: "I'm fluent and can express anything I want" },
    { skill: 'French', level: 65, note: "I was evaluated to be at the B2 level (Quebec niveau 5), I can understand and follow majority of the conversation and can conversate if needed" },
    { skill: 'Cantonese', level: 80, note: "I've grown up with this" },
    { skill: 'Mandarin', level: 70, note: "I have no problem understanding, and can conversate." }
];

const CustomTooltip = (title, containerWidth) => ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { level, note } = payload[0].payload;
        return (
            <div className="custom-tooltip bg-gray-800 rounded" style={{maxWidth: `${containerWidth}px`}}>
                <p>{title}</p>
                <p>{`${label} : ${level}`}</p>
                <p>{note}</p>
            </div>
        );
    }
    return null;
};



const Oth = () => {
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    // console.log(containerWidth);

    return (
        <section id="others" className="main-section scroll-mt-24">
            <h1>Other Information/Skills</h1>
            <hr className="separator" />
            <p>I'm fairly comfortable in these languages:</p>
            <div ref={containerRef} className="flex flex-wrap justify-between gap-1 w-full">
                <div className="w-1/2 min-w-[300px] flex-1 z-50">
                    <ResponsiveContainer width="100%" height={400}>
                        <RadarChart cx="50%" cy="50%" outerRadius="100%" data={skillData} margin={{ top: 80, bottom: 50, left: 100, right: 100 }}>
                            <PolarGrid stroke="#ccc"  />
                            <PolarAngleAxis dataKey="skill" stroke="#aaa" tick={(props) => {const { payload, ...rest } = props;return (<text {...rest} y={rest.y + (rest.y - rest.cy) / 4} verticalAnchor="middle" x={rest.x + (rest.x - rest.cx) / 4}>{payload?.value}</text>);}}/>
                            <Tooltip content={CustomTooltip("Language (Technical)", containerWidth/2)}/>
                            <Radar name="Skills" dataKey="level" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                    </div>
                <div className="w-1/2 min-w-[300px] flex-1 z-51">
                    <ResponsiveContainer width="100%" height={400}>
                        <RadarChart cx="50%" cy="50%" outerRadius="100%" data={skillData2} margin={{ top: 80, bottom: 50, left: 100, right: 100 }}>
                            <PolarGrid stroke="#ccc"  />
                            <PolarAngleAxis dataKey="skill" stroke="#aaa" tick={(props) => {const { payload, ...rest } = props;return (<text {...rest} y={rest.y + (rest.y - rest.cy) / 4} verticalAnchor="middle" x={rest.x + (rest.x - rest.cx) / 4}>{payload?.value}</text>);}}/>
                            <Tooltip content={CustomTooltip("Language (In real life)", containerWidth/2)}/>
                            <Radar name="Skills" dataKey="level" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <p>More information on CV.</p>
        </section>
    )
};

export { Oth }