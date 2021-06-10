import React, { Component } from 'react'
// import Pagination from 'react-bootstrap/Pagination'

export default class Pagination extends Component {
	render() {
		const {totalCards,cardsPerPage, paginate, nextPage, prevPage} = this.props
		const pageNumbers = []

		for (let i = 1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
			pageNumbers.push(i)
		}
		return (
			<nav>
				<ul className="pagination justify-content-center">
					<li className='page-item'>
						<a onClick={()=> prevPage()}className='page-link' href='#'>Previous</a>
					</li>
					{pageNumbers.map(num=> (
						<li className='page-item' key={num}>
							<a onClick={()=> paginate(num)}href='#' className='page-link'>{num}</a> 
						</li>
					))}
					<li className='page-item'>
						<a onClick={()=> nextPage()}className='page-link' href='#'>next</a>
					</li>
				</ul>
			</nav>
		)
	}
}