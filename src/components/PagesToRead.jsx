import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getReadBooks } from './utility';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
    const books = useLoaderData()
    const [readed, setReaded] = useState([])
    useEffect(() => {
        const storedBooks = getReadBooks()
        if (books.length > 0) {
            const bookReaded = books.filter(book => storedBooks.includes(book.bookId))
            setReaded(bookReaded)
        }
    }, [books])
    const [readedBar, setReadedBar] = useState([])

    useEffect(() => {
        const booksData = readed.map(read => {
            const obj = {
                name: read.bookName,
                pagesTR: read.totalPages
            }
            return obj
        });
        setReadedBar(booksData);
    }, [readed]);
 
    

    return (
        <div className='container mx-auto'>
            <BarChart
            width={1200}
            height={500}
                data={readedBar}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="pagesTR" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {readedBar.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};





export default PagesToRead;