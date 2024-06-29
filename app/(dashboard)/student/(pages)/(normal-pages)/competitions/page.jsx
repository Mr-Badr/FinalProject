"use client"
import React from 'react'
import Header from "../../../_components/Header";
import Navbar from "@/app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../_components/ComponentHeader";

function page() {
	return (
		<div dir="rtl">
			<Header />

			<main>
				<section className="pt-5 pb-5">
					<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
						<ComponentHeader />

						{/* My Section */}
						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<div className="col-lg-9 col-md-8 col-12">
								{/*  Card  */}
								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header d-flex align-items-center justify-content-between">
										<div>
											<h3 className="mb-0 tajawal-bold">مسابقاتي</h3>
										</div>
									</div>
									{/*  Card body  */}
									<div className="card-body p-0">
										<div className="table-responsive">
											<table className="table table-centered text-nowrap">
												<tbody>
													<tr>
														<td>
															<div className="d-flex align-items-center">
																{/*  quiz img  */}
																<a href="#">
																	<img src="../assets/images/course/course-javascript.jpg" alt="course" className="rounded img-4by3-lg" />
																</a>
																{/*  quiz content  */}
																<div className="ms-3">
																	<h4 className="mb-2"><a href="teachers-quiz-details.html" className="text-inherit">Javascript Basic Quiz</a></h4>
																	<div>
																		<span>
																			<span className="me-2 align-middle"><i className="fe fe-list"></i></span>
																			15 Questions
																		</span>
																		<span className="me-2">
																			<span className="me-2 align-middle"><i className="fe fe-clock"></i></span>
																			30 Minutes
																		</span>
																		<a href="teachers-quiz-result.html" className="me-2 text-body">
																			<span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>
																			Result
																		</a>
																	</div>
																</div>
															</div>
														</td>
														<td>
															{/*  icon  */}
															<div>
															<a href="/student/quiz-explore" className="btn btn-success btn-sm"> انضمام </a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="d-flex align-items-center">
																{/*  quiz img  */}
																<a href="#"><img src="../assets/images/course/course-react.jpg" alt="course" className="rounded img-4by3-lg" /></a>
																{/*  quiz content  */}
																<div className="ms-3">
																	<h4 className="mb-2"><a href="teachers-quiz-details.html" className="text-inherit">React Basic Quiz</a></h4>
																	<div>
																		<span>
																			<span className="me-2 align-middle"><i className="fe fe-list"></i></span>
																			20 Questions
																		</span>
																		<span className="me-2">
																			<span className="me-2 align-middle"><i className="fe fe-clock"></i></span>
																			18 Minutes
																		</span>
																		<a href="teachers-quiz-result.html" className="me-2 text-body">
																			<span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>
																			Result
																		</a>
																	</div>
																</div>
															</div>
														</td>
														<td>
															{/*  icon  */}
															<div>
															<button className="btn btn-outline-success btn-sm disabled-button" disabled>تم الإنضمام</button>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="d-flex align-items-center">
																{/*  quiz img  */}
																<a href="#"><img src="../assets/images/course/course-css.jpg" alt="course" className="rounded img-4by3-lg" /></a>
																{/*  quiz content  */}
																<div className="ms-3">
																	<h4 className="mb-2"><a href="teachers-quiz-details.html" className="text-inherit">CSS Beginner Quiz</a></h4>
																	<div>
																		<span>
																			<span className="me-2 align-middle"><i className="fe fe-list"></i></span>
																			18 Questions
																		</span>
																		<span className="me-2">
																			<span className="me-2 align-middle"><i className="fe fe-clock"></i></span>
																			15 Minutes
																		</span>
																		<a href="teachers-quiz-result.html" className="me-2 text-body">
																			<span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>
																			Result
																		</a>
																	</div>
																</div>
															</div>
														</td>
														{/*  icon  */}
														<td>
															<div>
																<a href="#" className="text-inherit"><i className="fe fe-settings"></i></a>
																<a href="#" className="me-2 link-danger"><i className="fe fe-trash-2"></i></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="d-flex align-items-center">
																{/*  quiz img  */}
																<a href="#"><img src="../assets/images/course/course-vue.jpg" alt="course" className="rounded img-4by3-lg" /></a>
																{/*  quiz content  */}
																<div className="ms-3">
																	<h4 className="mb-2"><a href="teachers-quiz-details.html" className="text-inherit">Vue.js Basic Quiz</a></h4>
																	<div>
																		<span>
																			<span className="me-2 align-middle"><i className="fe fe-list"></i></span>
																			26 Questions
																		</span>
																		<span className="me-2">
																			<span className="me-2 align-middle"><i className="fe fe-clock"></i></span>
																			35 Minutes
																		</span>
																		<a href="teachers-quiz-result.html" className="me-2 text-body">
																			<span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>
																			Result
																		</a>
																	</div>
																</div>
															</div>
														</td>
														<td>
															{/*  icon  */}
															<div>
																<a href="#" className="text-inherit"><i className="fe fe-settings"></i></a>
																<a href="#" className="me-2 link-danger"><i className="fe fe-trash-2"></i></a>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div className="d-flex align-items-center">
																{/*  quiz img  */}
																<a href="#"><img src="../assets/images/course/course-html.jpg" alt="course" className="rounded img-4by3-lg" /></a>
																{/*  quiz content  */}
																<div className="ms-3">
																	<h4 className="mb-2"><a href="teachers-quiz-details.html" className="text-inherit">HTML 5 Basic Quiz</a></h4>
																	<div>
																		<span>
																			<span className="me-2 align-middle"><i className="fe fe-list"></i></span>
																			15 Questions
																		</span>
																		<span className="me-2">
																			<span className="me-2 align-middle"><i className="fe fe-clock"></i></span>
																			30 Minutes
																		</span>
																		<a href="teachers-quiz-result.html" className="me-2 text-body">
																			<span className="me-2 align-middle"><i className="fe fe-file-text"></i></span>
																			Result
																		</a>
																	</div>
																</div>
															</div>
														</td>
														<td>
															{/*  icon  */}
															<div>
																<a href="#" className="text-inherit"><i className="fe fe-settings"></i></a>
																<a href="#" className="me-2 link-danger"><i className="fe fe-trash-2"></i></a>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

		</div>
	)
}

export default page