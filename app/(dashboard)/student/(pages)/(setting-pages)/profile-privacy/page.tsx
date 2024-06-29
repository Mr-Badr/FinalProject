"use client"
import React, { useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import Link from 'next/link';
import Header from "@/app/(dashboard)/student/_components/Header";
import Navbar from "@/app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "@/app/(dashboard)/student/_components/ComponentHeader";

function ProfilePrivacy() {
  const [isChecked, setIsChecked] = useState(false)

	return (
		
		<div dir='rtl'>
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
							{/*   Card  */}
							<div className="card">
								{/*   Card header  */}
								<div className="card-header">
									<h3 className="mb-0 tajawal-bold">إعدادات الخصوصية</h3>
									<p className="mb-0">يتيح جعل ملفك الشخصي عامًا للمستخدمين الآخرين رؤية ما كنت تتعلمه</p>
								</div>
								{/*   Card body  */}
								<div className="card-body">
									<div className="row d-lg-flex justify-content-between">
										<div className="col-lg-9 col-md-7 col-12 mb-3 mb-lg-0">
											<h4 className="mb-0 tajawal-bold">مستويات الخصوصية</h4>
											<p className="mb-0">إظهار ملفك الشخصي للعامة والخاصة.</p>
										</div>
										<div className="col-lg-3 col-md-5 col-12">
											<select className="form-select">
												<option value="">اختيار</option>
												<option value="public">عام</option>
												<option value="private">خاص</option>
											</select>
										</div>
									</div>
									<hr className="my-5" />
									<div>
										<h4 className="mb-0 tajawal-bold">إعدادات الملف الشخصي</h4>
										<p className="mb-5">تمنحك عناصر التحكم هذه القدرة على تخصيص مناطق ملفك الشخصي التي يستطيع الآخرون رؤيتها.</p>
										{/*   List group  */}
										<ul className="list-group list-group-flush">
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>اعرض ملفك الشخصي على محركات البحث</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="swicthOne" defaultChecked />
														<label className="form-check-label" htmlFor="swicthOne"></label>
													</div>
												</div>
											</li>
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>اعرض الدورات التدريبية التي تدرسها على صفحة ملفك الشخصي</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchTwo" />
														<label className="form-check-label" htmlFor="switchTwo"></label>
													</div>
												</div>
											</li>
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>اعرض ملفك الشخصي على الجمهور</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchThree" defaultChecked />
														<label className="form-check-label" htmlFor="switchThree"></label>
													</div>
												</div>
											</li>
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>التعلم حاليا</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchFour" defaultChecked />
														<label className="form-check-label" htmlFor="switchFour"></label>
													</div>
												</div>
											</li>
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>الدورات المكتملة</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchFive" defaultChecked />
														<label className="form-check-label" htmlFor="switchFive"></label>
													</div>
												</div>
											</li>
											{/*   List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>اهتماماتك</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchSix" defaultChecked />
														<label className="form-check-label" htmlFor="switchSix"></label>
													</div>
												</div>
											</li>
										</ul>
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

export default ProfilePrivacy
