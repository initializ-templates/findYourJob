import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import Footer from "../Footer/Footer";

// Example data representing job portal statistics
const data = [
    {
        month: "Jan",
        Applications: 400,
        Interviews: 240,
        Offers: 60,
        id: 1
    },
    {
        month: "Feb",
        Applications: 300,
        Interviews: 139,
        Offers: 45,
        id: 2
    },
    {
        month: "Mar",
        Applications: 500,
        Interviews: 280,
        Offers: 70,
        id: 3
    },
    {
        month: "Apr",
        Applications: 278,
        Interviews: 190,
        Offers: 55,
        id: 4
    },
    {
        month: "May",
        Applications: 189,
        Interviews: 148,
        Offers: 40,
        id: 5
    },
    {
        month: "Jun",
        Applications: 239,
        Interviews: 180,
        Offers: 50,
        id: 6
    },
    {
        month: "Jul",
        Applications: 349,
        Interviews: 200,
        Offers: 65,
        id: 7
    },
    {
        month: "Aug",
        Applications: 450,
        Interviews: 250,
        Offers: 80,
        id: 8
    }
];

const getIntroOfPage = (label) => {
    switch (label) {
        case "Jan":
            return "January Statistics";
        case "Feb":
            return "February Statistics";
        case "Mar":
            return "March Statistics";
        case "Apr":
            return "April Statistics";
        case "May":
            return "May Statistics";
        case "Jun":
            return "June Statistics";
        case "Jul":
            return "July Statistics";
        case "Aug":
            return "August Statistics";
        default:
            return "";
    }
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-gray-100 p-2 border rounded shadow-lg">
                <p className="label font-bold text-lg">{`${label} :`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">{`Applications: ${payload[0].value}`}</p>
                <p className="desc">{`Interviews: ${payload[1].value}`}</p>
                <p className="desc">{`Offers: ${payload[2].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function App() {
    return (
        <>
        <div className="w-full flex justify-center items-center mb-5">
            <BarChart
                width={1000}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="Applications" stackId="a" fill="#8884d8" />
                <Bar dataKey="Interviews" stackId="a" fill="#82ca9d" />
                <Bar dataKey="Offers" stackId="a" fill="#ffc658" />
            </BarChart>
        </div>
        <div className="pt-10 px-10">
        <Footer />
        </div>
        </>
    );
}
