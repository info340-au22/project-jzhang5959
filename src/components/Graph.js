import { LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend, ResponsiveContainer} from 'recharts';

export default function Graph() {
    const data = [{note:"aaaaa", sleepValue:19}, {note:"ssssss", sleepValue:1}];
    const Chart = () => {
        return(
            <ResponsiveContainer width="99%" height={500}>
                <LineChart
                width="99%"
                height={300}
                data={data}

                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="note" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                type="monotone"
                dataKey="sleepValue"
                stroke="#8884d8"/>
                </LineChart>
            </ResponsiveContainer>

            
    );
    
    }
    return (<div height={500}><Chart/></div>);
}




