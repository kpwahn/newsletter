import React from 'react';
import { useParams } from 'react-router';
import data from '../../data/index'
import dayjs from 'dayjs'
import './styles.css'

const Newsletter = props => {
    let {month, year} = useParams();
    let displayMonth = dayjs(`${year}/${month}`).format('MMMM');
    let {announcements, baptisms, birthdays, calendarItems, newPeople, presidencyMessage, resources} = data[year][month];
    
    return (
        <div>
            <h1 className="header">{displayMonth} Newsletter</h1>
            <section>
                <h2>Calendar items</h2>
                <ol>
                    {
                        calendarItems.map(i => {
                            let startTime = dayjs(`${i.date} ${i.startTime}`).format('h:mm a')
                            let endTime = dayjs(`${i.date} ${i.endTime}`).format('h:mm a')
                        
                            return (
                                <li key={i}>
                                    <h3>{i.title}</h3>
                                    <p>{i.date} from {startTime} to {endTime}</p>
                                    <p>{i.details}</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </section>
            <section>
                <h2 className="baptism-header" >Upcoming Baptisms</h2>
                <ol className="baptism-list">
                    {
                        baptisms.map(b => (
                            <li key={b}>
                                <h3 className="baptism-name">{b.name}</h3>
                                <p className="baptism-date">{b.date} at {dayjs(`${b.date} ${b.time}`).format('h:mm a')}</p>
                            </li>
                        ))
                    }
                </ol>
            </section>
            <section>
                <h2 className="welcome-header">Welcome to Primary</h2>
                <ul className="welcome-list">
                    {
                        newPeople.map(k => (
                            <li key={k}>
                                <h3 className="welcome-name">{k.name}</h3>
                                <p className="welcome-details">{k.details}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h2>Birthdays</h2>
                <ol>
                    {
                        birthdays.map(b => (
                            <li key={b}>
                                <h3>{b.name}</h3>
                                <p>{b.date}</p>
                            </li>
                        ))
                    }
                </ol>
            </section>
            <section>
                <h2>Announcements</h2>
                <ul>
                    {
                        announcements.map(a => (
                            <li key={a}>
                                <h3>{a.title}</h3>
                                <p>{a.details}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section>
                <h2>Presidency message</h2>
                {
                presidencyMessage.map(p => (
                    <p key={p}>{p}</p>
                ))
                }
            </section>
            <section>
                <h2>Resources for parents</h2>
                <ul>
                    {
                        resources.map(r => (
                            <li key={r}>
                                <h3>{r.title}</h3>
                                <p>{r.details}</p>
                                <a className="resource-link" href={r.link}>{r.linkText}</a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
};

export default Newsletter;