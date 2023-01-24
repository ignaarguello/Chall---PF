import React from 'react'
import './Carousel.css'
import FlechaLeft from '../FlechaLeft/FlechaLeft'
import FlechaRight from '../FlechaRight/FlechaRight'
import { useState, useEffect, useLayoutEffect } from 'react'


export default function Carousel() {
    let [index, setIndex] = useState(0)
    let images = document.querySelectorAll('.image-logo')

    const arrayImage =
        [
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,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',
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHEA0SBw8SFRATDQ0QEBcSFxcSEw8VFxEWFhgWFhUYHiggGBslGxUXITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0NFRAQGy8mIB0tLTUyLS0uListKy0tLSstLTItLS0tLS0tLTUtLSstLS0tLS0tLS4vLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAABAgAFBgMHBP/EAEIQAAIBAQQDCwgHCQEAAAAAAAABAgMEBRExBiGSEhYiQVFhcYGRwdEVMkJDVKGx0hMUM1JyouEjNERTY4KTo+Ji/8QAGgEBAQADAQEAAAAAAAAAAAAAAQACBAUDBv/EADYRAQABAgIHBwIFAwUAAAAAAAABAgMEERIUFTFRUpEFEyFBYaHRMuFCcYGx8FNioiIjY8Hi/9oADAMBAAIRAxEAPwDo2dV8sBAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQbWjo7edeMZU4LcyipLGSWprFHlOIoicm3TgL9URMRv9V71r1fow2kGs22Wzb/COp3qXpyU9r9C1q2NmX/Tqzelen9PafgWtW/VbLv8Ap1+x3n3n96jtS+Utbt+q2Vf4x1n4O868vv0u2XyhrdHqdk3+Me/wd5l4cdSl2y8C1yjhK2Re4x7/AAVoVbnnVp/m8C1ynhK2Pd5o92bybY861PskWu08Dsa5zQVoRauOvDZZa7TwWxbnPHRm8a0vO0Q2W+8tdp4DYlfPHT7laC1+O0x2H8xa9HL7rYdfPHT7laCVOO1L/G/nLXo5ff7HYdX9T/H7neFLjtX+r/sNe/t9/sthT/U/x/8AR3hL2r/X/wBFr39vv9jsL/k9vud4VP2mWwvENfnlOwqeeeit4Vn9onsxLX6uU7Bo556QreFZOOvU7Ihr9XCDsG1zz7M3hWLjr1fy+Ba/XwhbBtc0+3w5TSa7bNdNf6KzTlLCEXNyw1N46tS5MH1m9h7lVyjSmHE7Qw1GHvd3ROfh45tQz3aAJOkZou8BAZAMQkgBDIQlVcYxzlJRXS3gWeXiop0piI831GlBUoxjHJRSXUsDkTOc5vraYyiI4LAsJMJMJMJMJMJMJMJMJMJMJMJMJMJMJMJNZf19Wa5qblWeM2n9HDjm+5crPazZqu1ZRuaeMxtGGt6VW/yjj9nyi12ira5zqV3jOcnKT52dummKaYiPJ8RduVXK5rq3y8GZPMEnSM0XeAgMgGISQAht9FbH9atEZPzaa3b6cort19R4YivRoy4t3s+1p3onyp8fh3pzn0LCTXzvq7KbanXhim09eTPSLNc+TWnF2InKa4Q7/upevj733D3Fzgx17D88Jekd0L167JeA6vc4DX8Pzful6TXOvXfln8o6tc4DaOG5vafgPSi51678k/lLVrvD9htLDc3tPwHpTc/857E/AdVu8BtPDc3tPwnfXc/8x7E/AtVu8BtTDc3tKXpbc69ZLYl4Dql3gNq4bjPSQ9L7nXpz2JeBapd4Da2G4z0lO/C5/vT2JDql3+SNr4bjPSU787p5amwWp3BtjDevRL01ulZKrsrxHUrnoxntnDevRMtN7rWUKz/tj3yHUrnoxntvD8KukfKXp1di9XX2YfOWo3OMfz9Btyxy1dI+XlU08sK+zo1X07hfCTMowNfnMMJ7ds+VM+3y1Vv05t1ZNWOnGnzvhy6tSS7Ge1GBoj6pzaV7ty7VGVumKfefhy9ptFa1Sc7TOUpvNyeLN2mmKYyhxrlyq5VNVc5z6vJmTzSyAJOkZou8BAZAMQkgBDutE7F9Vs6lJcKo92/w+j7tfWc7EV6VeXB9B2fa0LOc76vH4bo8G88LdaFZaVWcvRhKXYjKinSqiHndr0LdVXCHy3XxnYfILpWavX+wpzl+GLl8EE1RG+WVNuur6YmfyjN6q67xeVnrf45LuDvaOMdWerXp/BPST5IvJ5WersS8C72jjA1W/wAk9JZ5GvP2erssu+t8YWqX+SejPId6+z1Owu+t8VqWI5JZ5CvZ5Wep2Iu/t8VqOI5JZ5Avf2efu8S1i3zLUMTyT7fLN718P+Hn2x8S1i1zDZ+J5J9vkb3b49nl2x8S1i1zDZ+K5J9vk72r59nltQ8R1m1zLZ2K5PePlqatOVKUo1M4ycXk8Gng9aPaJzjNpVUzTMxPkhiwDEJZACAQDEJZAEnSM0XeAgMgGISQfou2yO3VqdNelLXzRWt+4xrq0aZl6WLXe3KaOL6VGKgkorUkkuY5T6iIyjKCRc9ppa/oaEYReupNbMdb9+HabOFpzrz4Ob2nd0bUU837Q5nR6wRvGvCNTzEnOfOlhq620bd6vQomYcnB2IvXopndHjL6LCEYJKCSSWCS1JdRy5nN9PEREZQoiwkwkwkwkwkwkwk0Glt9q7KbhQf7aawj/Tjxyfdz9BtYaxp1ZzuhzO0sb3FGhT9VXtHH4fNjrPkwyYhiEsgBAIBiEsgCTpGaLvAQGQDEJIOq0LsWCqVprP8AZw6M5PtwXUzTxVe6l1+zLO+5P5R/26k1HWYSfPdKbb9dtEtw+DTX0cefB8J9vwOnh6NGj83zWPvd5enLdHh8troJR/eJv/xBe9vuPHFz9MNzsmj66vyh1ppOywkwkwkHJLNkM0OvRj5049qHRkadMeaJW2yx86rBf3LxHQq4MZu24/FHV41b3u2l9paKS/vj8MTKLNc7ol51YuxTvrjrDQ3vpnZ6ScbsW7nlupJqEefDOXuNm1g5nxr8HNxPbFFMZWfGePl9/wCeLiLRXq2mUp2iTlOTxbebOjTTFMZQ+duV1V1TVVOcy8TJgGTEMQlkAIBAMQlkASdIzRd4CAyAYg0qU60oxpLGUpKK6Wwmcozk00zVMUxvl9JsNmhY6dOnTyjFLpfG+tnLrq0qpl9PatxboimPJ7mL0azSC8Vd1GTi+HLgU+l8fVmetm3p1tXGX+5tTMb53PnTOo+YVCvWpLCnOSWeCbS9xaMTvgxXVTumYY7TaHnUntPxLRjgJu1809ZRKtVec5drHRjgxmurjPVMpzecn2scoYzVPF5y15iwnxTuI8iHOWOjHAOK5CGUDBCsoDIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQ6bQ+7t05V6q1LGNPp45d3aamJufhh1ezrGczdn9HVmm64nKME3N4JJtt5JEJmIjOXzu/7zd51XKP2ceDTXNxvpfgdSzb0KcvN81jMR31zON0bn6ri0dqXilO0NwpcWHnT6ORc5hdxEUeEb3rhMBVejSq8I95dVZ7juyzrgUYPnmt2/zYmnVeuT5uvRgrFG6mP18f3e8rtsEvOoUtiPgY95Xxl6Th7U/gjpDxdyXW/4ensoy765xlhqdjkjoqNz3ZHKz0uuEX8UHfXOMmMJYj8EdIcRpXWs06+4sUIRhTW5e4SinLHGWXJqXUzo4eKtDOrzfPdo10Te0bcREU8OPm0h7tAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZB7WGyVLdUhTpZyet/dXG+pBVVFMTMs7VublcUx5vo1no07NCMKSwjGKSOXVMzOcvpqKIopimN0PQGTkNK76VXGhZHwU8KjXpNeiublN7D2cv8AVLi9oYvS/wBqjd5/DUXFd/lKtGEvMXCn+FcXXl1nteuaFGbSwljvrsUzu830WMVFJRWCSSSXEct9NEZeEEiwkJSjFNyeCWbepIhMxHjLl7/0opU4yp3ZLdTeKc15sPwvjfPkblnDTM519HIxnaVMRNFmc548Py4uKfOdBwJSQDFiGISyAYgEEiAyYhiEsgBAIBiEsgCTpGaLvAQGQdjold31em6tVcKouDzQ/XPsNLEXM50Y8na7PsaNGnO+f2b81nRcrpFpCuFSu+XNOa+EX3m5ZsfiqcjG47fRbn85+HJs3HHfosdutVhbdkm4t4J4JPHDpRjVRTV9UM7d6u1OdE5NhDSi9YZyi+mK7sDz1a22Y7Svx5x0XvtvPkpbL+YNVt+p2pf9On3eVTSm9Z5TjH8MV34mUYa3DCrtLET5xH6NXa7fa7Z+9VZS5m9XZketNFNO6Gpcv3Ln11TL8zM3iliAQDFiGISyAYgEEiAyYhiEsgBAIBiEsgCTpGaLvAQ/dcl3u8a0YvzFwp9C4uvI87tehTm2MNZ725EeXm7q02mz2KG6ryUYrV+iXH0HPppmqcod+u5RbpzqnKHH31pDVt2MLNjClk/vT6eRcxu2rEU+M73ExWOquf6afCPeWiNlz0sgGIDEAmKSAYgMgliAQDFiGISyAYgEEiAyYhiEsgBAIBiEsgCTpGaLvAQ29hvinddLc2SGNWWucpeauRJZvDq14nhXamurOrc3bWKizbyojxnfLWWu1V7ZLdWmbk+fJcyWSPammKYyhp3LlVyc6pzfnMnmBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJOkZou8BAZAMQkgBCWQDEBiATFJAMQGQSxAIBixDEJZAMQCCRAZMQxCWQAgEAxCWQBJ0jNF3gIDIBiEkAISyAYgMQCYpIBiAyCWIBAMWIYhLIBiAQSIDJiGISyAEAgGISyAJP/Z',
        ]

    useLayoutEffect (() => {
        let images = document.querySelectorAll('.image-logo')
        images[index]?.classList.add('image-logo2')
    }, [])

    useEffect(() => {
        images[index]?.classList.add('image-logo2', 'animation_scale')
        console.log('index estado cero', index)
    }, [index])


    const prevImage = () => {
        setIndex(index - 1)
        { index === 0 ? setIndex(arrayImage.length - 1) : console.log('') }
        { index === arrayImage.length - 1 ? images[0].classList.remove('image-logo2') : console.log('') }
        images[index].classList.remove('image-logo2')
        console.log('index prev', index)
    }

    const nextImage = () => {
        { index === arrayImage.length - 1 ? setIndex(0) : setIndex(index + 1) }
        {index === 1 ? images[index-1].classList.remove('image-logo2') : console.log('') }
        images[index].classList.remove('image-logo2')
        console.log('index next', index)
    }

    return (
        <div id='containerCarousel__carousel'>
            <FlechaLeft evento={prevImage} />
            {
                arrayImage.map(element =>
                    <div className="cardLogo_pf">
                        <img className='image-logo' src={element} alt="Logo Pro Flight Enterprise" />
                    </div>
                )
            }
            <FlechaRight evento={nextImage} />
        </div>
    )
}
