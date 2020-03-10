import React from 'react';
import data from '../../data/index'
import {
    useHistory,
    useLocation,
    useParams
} from 'react-router-dom'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom';
import './styles.css';

const Home = props => {

    let x = useHistory()
    let y = useLocation()
    let z = useParams()

    console.log(x,y,z)

    let years = Object.keys(data).map(x => {
        return Object.keys(data[x]).map(y => ({
                ...data[x][y],
                year: x,
                month: y
            }
        ))
    }).flat().slice(0, 4);

    return (
        <>
            <h1>Home Page</h1>
            {
                years.map(p => {
                    let header = dayjs(`${p.year}/${p.month}`).format('MMMM YYYY');
                    
                    return (
                        <section key={`${p.year}_${p.month}`} className="post">
                            <Link to={`/${p.year}/${p.month}`}>
                                <h2 className="post-header">{header}</h2>
                                <p className="post-p">{`${p.presidencyMessage[0].split(' ').slice(0, 8).join(' ')}...`}</p>
                            </Link>
                        </section>
                    );
                })
            }
        </>
    );
};

export default Home;