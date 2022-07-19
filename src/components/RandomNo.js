const randomNo = [
    [3, 10, 5, 11, 7, 2, 5, 2, 7],
    [8, 6, 4, 5, 3, 1, 10, 8, 6],
    [7, 2, 9, 4, 9, 6, 9, 4, 1],
    [8, 5, 10, 6, 3, 8, 4, 1, 6],
    [3, 1, 9, 1, 9, 7, 9, 7, 5],
    [2, 7, 4, 10, 5, 2, 8, 3, 10],
    [7, 4, 9, 2, 9, 4, 9, 6, 1],
    [2, 10, 8, 7, 5, 3, 4, 2, 10],
    [1, 6, 3, 6, 1, 8, 3, 8, 5],
];

function RandomNo(props) {
    return ( 
        <div className='random'>
            <table className="table">
                <tbody>
                        {randomNo.map( (value, index) => {
                            return (
                            <tr key={index}>
                                {value.map((v, index) => {
                                    return (
                                    <td key={index}>
                                        <button className="btn" onClick={() => props.quz ? props.click(v) : ''}>{v}</button>
                                    </td>
                                    )
                                })}
                            </tr>
                            )
                        })}
                </tbody>
            </table>
      </div>
     );
}

export default RandomNo;