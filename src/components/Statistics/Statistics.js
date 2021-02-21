import React from "react";
import PropTypes from "prop-types";
import style from './Statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={style.statistics}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style.statList}>
                {stats.map(({id, label, percentage}) =>(
                    <li key={id} className={style.item}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        }),
      ),
};

export default Statistics;