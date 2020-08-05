import React from 'react'
import Image404 from "./assets/images/404-bg.png"
import Image4042 from "./assets/images/404.png"

export default function Error404() {
	return (
		<div>
			<section class="four-zero-four">
				<img class="bg-img" src={Image404} alt="" />
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="content">
								<img src={Image4042} alt="" />
								<div class="inner-content">
									<h4 class="title">
											Oops,
											Something went wrong !
									</h4>
									<a href="index.html" class="mybtn1"><i class="fas fa-angle-double-left"></i> BACK TO HOME</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
