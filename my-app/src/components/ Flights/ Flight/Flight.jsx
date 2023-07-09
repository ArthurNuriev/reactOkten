const Flight = ({flight}) => {

     const {mission_name, launch_year, links} = flight;

    return (
        <div className={'flight'}>
            <p>{mission_name}</p>
            <p>{launch_year}</p>
            <img src={links.mission_patch} alt="img"/>
        </div>
    )

}

export {Flight}