import React, { Component } from 'react';
import * as styles from './Flow.css';
import * as cards from './Custom.css';

class Flow extends Component {

    constructor() {
        super();
    }

    render() {
        const comp = (
            <div className={styles.tree}>
                <ul>
                    <li>
                        <a href="#" className={cards.BlogCard}>Parent</a>
                        <ul>
                            <li>
                                <a href="#" className={cards.BlogCard}>Child</a>
                                <ul>
                                    <li>
                                        <a href="#" className={cards.BlogCard}>Grand Child</a>
                                    </li><li>
                                        <a href="#" className={cards.BlogCard}>Grand Child</a>
                                        <ul>
                                            <li>
                                                <a href="#" className={cards.BlogCard}>Grand Child</a>
                                            </li>
                                            <li>
                                                <a href="#" className={cards.BlogCard}>Grand Child</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li><li>
                                <a href="#" className={cards.BlogCard}>Child</a>
                                <ul>
                                    <li>
                                        <a href="#" className={cards.BlogCard}>Grand Child</a>
                                        <ul>
                                            <li>
                                                <a href="#" className={cards.BlogCard}>Grand Grand Child</a>
                                            </li>
                                        </ul>
                                    </li><li>
                                        <a href="#" className={cards.BlogCard}>Grand Child</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
        return (<div>{comp}</div>)
    }
}

export default Flow;