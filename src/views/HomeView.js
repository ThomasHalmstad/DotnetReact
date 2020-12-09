import React, { useState, useEffect } from 'react'
import PokemonService from '../shared/api/service/PokemonService'
import { useDebounce } from '../hooks/useDebounce'

export const HomeView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const debouncedSearchTerm = useDebounce(search, 500)

    const fetchDataFromPokemonAPI = async () => {
        setLoading(true)
        try {
            const response = await PokemonService.searchForPokemon(search.toLowerCase())
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const displayDataWhenDoneLoading = () => {
        return <div>
            <hr />
            <br />
            <img src={data?.sprites?.front_default} alt={''} />
            <h1> Name: {data?.name} </h1>
            <h1> Weight: {data?.weight} lb</h1>
            <h1> Height: {data?.height} </h1>
            <h1> Abilities: {data?.moves?.length} total moves</h1>
        </div>
    }

    useEffect(() => {
        console.log('Rendering Component')

        if (debouncedSearchTerm) {
            fetchDataFromPokemonAPI()
        }

        return () => {
            console.log('Changing searchterm')
        }
    }, [debouncedSearchTerm])

    return (
        <div>
            <h2>Search for a pokemon</h2>
            <input onChange={(event) => setSearch(event.target.value)} />
            {loading
                ? null
                : displayDataWhenDoneLoading()}
        </div>
    )
}