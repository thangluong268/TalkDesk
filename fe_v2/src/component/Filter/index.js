import React from 'react'
import './index.css'
import Axios from 'axios';

const Filter = () => {
    const [ringGroup, setRingGroup] = React.useState([]);
    const [phoneNumber, setPhoneNumber] = React.useState([]);

    const filters = [
        {
            label: "Filter by Ring Group",
            name: "filterByRingGroup",
            value: ringGroup,
        },

        {
            label: "Filter by Phone Number",
            name: "filterByPhoneNumber",
            value: phoneNumber,
        },
    ];

    React.useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API}/agent/getAllRingGroup`)
            .then((res) => {
                setRingGroup(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    React.useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API}/agent/getAllPhoneNumbers`)
            .then((res) => {
                setPhoneNumber(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div style={{ display: "flex" }}>
            {/* display filter */}
            {filters.map((filter, index) => {
                return (
                    <div style={{ paddingRight: "80px" }}>
                        <label>{filter.label}</label>
                        <br></br>
                        <select
                            name={filter.name}
                            id={filter.name}
                            style={{ width: "240px", height: "30px", fontSize: "14px" }}
                        >
                            {filter.value.map((optionValue, optionIndex) => {
                                return <option>{filter.name === "filterByRingGroup" ? optionValue.name : optionValue}</option>;
                            })}
                        </select>
                    </div>
                );
            })}
        </div>
    )
}

export default Filter