"use client"
import React, { useEffect, useRef, useState } from 'react'
import "@/app/globals.css"
import "@/assets/js/vendors/flatpickr";
import '@/assets/libs/flatpickr/dist/flatpickr.min.js';
import '@/assets/libs/flatpickr/dist/flatpickr.min.css';
import ReactApexChart from 'react-apexcharts';
import Link from 'next/link';
import Validations from './Validations';


function AdminDashboard() {

	/* Show model Start */
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
	/* Show model End */

	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			flatpickr(inputRef.current, {
				// Optional: You can add configuration options for flatpickr here
			});
		}
	}, []);

	// Function to generate random data for the series
	const generateRandomData = () => {
		const data1 = [];
		const data2 = [];
		for (let i = 0; i < 12; i++) {
			data1.push(Math.floor(Math.random() * 20000)); // Random number between 0 and 20000 for Series 1
			data2.push(Math.floor(Math.random() * 20000)); // Random number between 0 and 20000 for Series 2
		}
		return { data1, data2 };
	};
	// Generate initial random data for both series
	const initialData = generateRandomData();
	const chartOptions = {
		chart: {
			height: 280,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth',
			width: 4,
		},
		xaxis: {
			type: 'category',
			categories: [
				'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
				'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
			],
			labels: {
				style: {
					fontSize: '13px',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					colors: '#6b6b6b'
				},
				offsetX: 0,
				offsetY: 0
			}
		},
		yaxis: {
			labels: {
				style: {
					fontSize: '13px',
					fontFamily: 'Inter, sans-serif',
					fontWeight: 400,
					colors: '#6b6b6b',
				},
				offsetX: -15,
				offsetY: 0
			}
		},
		tooltip: {
			x: {
				format: 'MMM',
			},
			y: {
				formatter: function (value) {
					return value + 'k';
				}
			}
		},
		grid: {
			borderColor: '#e0e0e0',
			strokeDashArray: 5,
			padding: {
				top: -15,
				bottom: -15,
				left: 35,
				right: 10
			}
		}
	};

	// State to hold current data for the chart
	const [chartSeries, setChartSeries] = React.useState([
		{
			name: 'Series 1',
			data: initialData.data1,
			color: '#008ffb'
		},
		{
			name: 'Series 2',
			data: initialData.data2,
			color: '#1bd5b5'
		}
	]);

	// Function to update chart data
	const updateChartData = () => {
		const newData = generateRandomData();
		setChartSeries([
			{ ...chartSeries[0], data: newData.data1 },
			{ ...chartSeries[1], data: newData.data2 }
		]);
	};

	React.useEffect(() => {
		const interval = setInterval(updateChartData, 10000); // Update data every 5 seconds
		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	// Donut chart data and options
	const donutChartOptions = {
		chart: {
			type: 'donut',
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom',
					},
				},
			},
		],
	};

	const donutChartSeries = [44, 55, 41, 17, 15]; // Example data for the donut chart

	return (
		<section className={sectionClassName} style={sectionStyle}>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					<div className="border-bottom pb-3 mb-3 d-lg-flex justify-content-between align-items-center">
						<div className="mb-3 mb-lg-0">
							<h1 className="mb-0 h2 tajawal-bold">نظرة عامة</h1>
						</div>
						<div className="d-flex">
							<div className="input-group me-3">
								<input
									className="form-control flatpickr flatpickr-input tajawal-medium"
									type="text"
									placeholder="حدد تاريخ"
									aria-describedby="basic-addon2"
									readOnly
									ref={inputRef} />

								<span className="input-group-text" id="basic-addon2">
									<i className="fe fe-calendar"></i>
								</span>
							</div>
							<a href="#" className="btn btn-primary tajawal-medium">
								الإعدادات
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/* Card */}
					<div className="card mb-4">
						{/* Card body */}
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3 lh-1">
								<div>
									<span className="fs-6 text-uppercase tajawal-bold ls-md">
										المبيعات
									</span>
								</div>
								<div>
									<span className="fe fe-shopping-bag fs-3 text-primary"></span>
								</div>
							</div>
							<h2 className="tajawal-bold mb-1">$10,800</h2>
							<span className="text-success tajawal-bold">
								<i className="fe fe-trending-up me-1"></i>
								+20.9$
							</span>
							<span className="me-1 tajawal-medium">عدد المبيعات</span>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/* Card */}
					<div className="card mb-4">
						{/* Card body */}
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3 lh-1">
								<div>
									<span className="fs-6 text-uppercase tajawal-bold ls-md">
										الدورات
									</span>
								</div>
								<div>
									<span className="fe fe-book-open fs-3 text-primary"></span>
								</div>
							</div>
							<h2 className="tajawal-bold mb-1">2,456</h2>
							<span className="text-danger tajawal-bold">120+</span>
							<span className="me-1 tajawal-medium">عدد المنتظرين</span>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/* Card */}
					<div className="card mb-4">
						{/* Card body */}
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3 lh-1">
								<div>
									<span className="fs-6 text-uppercase tajawal-bold ls-md">
										الطلاب
									</span>
								</div>
								<div>
									<span className="fe fe-users fs-3 text-primary"></span>
								</div>
							</div>
							<h2 className="tajawal-bold mb-1">1,22,456</h2>
							<span className="text-success tajawal-bold">
								<i className="fe fe-trending-up me-1"></i>
								+1200
							</span>
							<span className="me-1 tajawal-medium">طلاب</span>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/* Card */}
					<div className="card mb-4">
						{/* Card body */}
						<div className="card-body">
							<div className="d-flex align-items-center justify-content-between mb-3 lh-1">
								<div>
									<span className="fs-6 text-uppercase tajawal-bold ls-md">
										أستاذ
									</span>
								</div>
								<div>
									<span className="fe fe-user-check fs-3 text-primary"></span>
								</div>
							</div>
							<h2 className="tajawal-bold mb-1">22,786</h2>
							<span className="text-success tajawal-bold">
								<i className="fe fe-trending-up me-1"></i>
								+200
							</span>
							<span className="me-1 tajawal-medium">أستاذ</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-8 col-lg-12 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card header  */}
						<div className="card-header align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0 tajawal-bold">الأرباح</h4>
							</div>
							<div>
								<div className="dropdown dropstart">
									<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</a>
									<div className="dropdown-menu" aria-labelledby="courseDropdown1">
										<span className="dropdown-header">الإعدادات</span>
										<a className="dropdown-item" href="#">
											<i className="fe fe-external-link dropdown-item-icon"></i>
											Export
										</a>
										<a className="dropdown-item" href="#">
											<i className="fe fe-mail dropdown-item-icon"></i>
											Email Report
										</a>
										<a className="dropdown-item" href="#">
											<i className="fe fe-download dropdown-item-icon"></i>
											Download
										</a>
									</div>
								</div>
							</div>
						</div>
						{/*  Card body  */}
						<div className="card-body">
							{/*  Line chart  */}
							<div id="chart">
								<ReactApexChart options={chartOptions} series={chartSeries} type="line" height={300} />
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-4 col-lg-12 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card header  */}
						<div className="card-header align-items-center card-header-height d-flex justify-content-between align-items-center">
							<div>
								<h4 className="mb-0 tajawal-bold">المنخرطين</h4>
							</div>
							<div>
								<div className="dropdown dropstart">
									<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" aria-expanded="false">
										<i className="fe fe-more-vertical"></i>
									</a>
									<div className="dropdown-menu" aria-labelledby="courseDropdown2">
										<span className="dropdown-header">الإعدادات</span>
										<a className="dropdown-item" href="#">
											<i className="fe fe-external-link dropdown-item-icon"></i>
											Export
										</a>
										<a className="dropdown-item" href="#">
											<i className="fe fe-mail dropdown-item-icon"></i>
											Email Report
										</a>
										<a className="dropdown-item" href="#">
											<i className="fe fe-download dropdown-item-icon"></i>
											Download
										</a>
									</div>
								</div>
							</div>
						</div>
						{/*  Card body  */}
						<div className="card-body" style={{
							margin: "2vh 0"
						}}>
							{/* Donut Chart */}
							<div id="donut-chart">
								<ReactApexChart options={donutChartOptions} series={donutChartSeries} type="donut" height={310} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Validations />

			{/* Model Popup */}
			{show && <div className="fade modal-backdrop show"></div>}
			<div role="dialog" aria-modal="true" className={`fade modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
				<div style={{
					width: "auto",
					margin: "1.75rem",
					transform: "none",
					transition: "transform .3s ease-out",
					marginLeft: "auto",
					marginRight: "auto",
					pointerEvents: "none",
					position: "relative",
					maxWidth: "1000px",
					paddingTop: "8%"
				}}>
					<div className="modal-content">
						<div className="modal-header">
							<div className="modal-title tajawal-bold">تعديل الدورات</div>
							<button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
						</div>
						<div className="modal-body">
							<form className="">
								<div className="row">
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">العنوان </label>
										<input
											placeholder="العنوان "
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">البريد الإلكتروني </label>
										<input
											placeholder="البريد الإلكتروني"
											required=""
											type="email"
											id="email"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الهاتف</label>
										<input
											placeholder="الهاتف"
											required=""
											type="tel"
											id="tel"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label">تاريخ الإزدياد</label>
										<div className="input-group">
											<input className="form-control flatpickr flatpickr-input" placeholder="حدد تاريخ" aria-describedby="basic-addon2" readonly="" type="text" style={{
												borderRadius: "0px 5px 5px 0px"
											}} />
											<span className="input-group-text" id="basic-addon2" style={{
												borderRadius: "5px 0px 0px 5px"
											}}>
												<i className="fe fe-calendar"></i>
											</span>
										</div>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الولاية</label>
										<input
											placeholder="الولاية"
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label"> الجنس</label>
										<select className="form-select">
											<option value="public">ذكر</option>
											<option value="private">أنثى</option>
										</select>
									</div>

									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">المستوى الدراسي</label>
										<select className="form-select">
											<option value="">أولى ثانوي</option>
											<option value="">ثاني ثانوي</option>
											<option value="">ثالث ثانوي</option>
										</select>
									</div>
									<div className="mb-3 col-lg6 col-md-6">
										<label className="form-label">الفوج</label>
										<select className="form-select">
											<option value="private">الفوج أ</option>
											<option value="private">الفوج ب</option>
										</select>
									</div>
									<div className="mb-3 col-lg-12 col-md-12">
										<label className="form-label">الوصف </label>
										<input
											placeholder="الوصف الكامل"
											required=""
											type="text"
											id="text"
											className="form-control"
											style={{
												textAlign: "right"
											}}
										/>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer" dir='ltr'>
							<button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إغلاق</button>
							<button type="button" className="btn btn-primary w-20" onClick={handleClose}>تعديل</button>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

export default AdminDashboard