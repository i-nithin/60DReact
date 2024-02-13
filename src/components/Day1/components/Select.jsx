import { useState } from "react"

const data = [
    {
        "value" : "IN",
        "country" : "India",
        "cities" : [
            "Bangalore", "Kochi", "Chennai", "Calicut", "Coimbatore"
        ]
    },
    {
        "value" : "US",
        "country" : "United States",
        "cities" : [
            "New York", "Austin", "Texas", "Chicago"
        ]
    },
    {
        "value" : "RU",
        "country" : "Russia",
        "cities" :[]
    }
]
const Select = () => {

    const [ selectedCountry, setSelectedCountry ] = useState("")
    const [ selectedCity, seySelectedCity ] = useState("")
    console.log(selectedCountry)
    console.log(selectedCity)
    console.log('hello')

    return(
        <div>
           <select>
            {
                data.map((item, index) => {
                    return(
                        <option key={item.value} onClick={()=>setSelectedCountry(item.country)}>{item.country} </option>
                    )
                })
            }
           </select>
        </div>
    )
}

export default Select