import React from 'react'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<div
			id={'footer'}
			className='shadow-2 z-50 w-full mt-auto bg-gray-100 p-2 bottom-0 md:sticky md:bottom-0'
		>
			<span className='text-gray-800'>
				<span>&#169; </span> {/* Copyright symbol */}
				{`${currentYear} Vikram Singh. All rights reserved.`}
			</span>
		</div>
	)
}

export default Footer
