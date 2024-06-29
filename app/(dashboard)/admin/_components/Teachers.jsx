"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token

function Teachers() {


	/* Show model Start */
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px" } : {};
	/* Show model End */

	const [teachers, setTeachers] = useState([]);
	const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState({
    id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);

	useEffect(() => {
    axios.get('https://clicschool.logicielab.net/api/teachers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setTeachers(response.data.data);
      setFilteredTeachers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (teacher) => {
    setSelectedTeacher(teacher);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

	const confirmDelete = () => {
    axios.delete(`https://clicschool.logicielab.net/api/teachers/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      const newTeachers = teachers.filter(teacher => teacher.id !== deleteId);
      setTeachers(newTeachers);
      setFilteredTeachers(newTeachers);
      setShowDeleteModal(false);
      setDeleteId(null);
			toast.success('تم حذف المعلم بنجاح!',{
        position: "bottom-right"
      });
    })
    .catch(error => {
      console.error('Error deleting data:', error);
			toast.error('حدث خطأ أثناء حذف المعلم. الرجاء المحاولة مرة أخرى.', {
				position: "bottom-right"
			});
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedTeacher(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
		const { id, user_id, first_name, last_name, bio, hourly_rate } = selectedTeacher;
	
		axios.put(`https://clicschool.logicielab.net/api/teachers/${id}`, 
			{ user_id, first_name, last_name, bio, hourly_rate }, 
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(() => {
				const newTeachers = teachers.map(teacher =>
					teacher.id === id ? { ...teacher, user_id, first_name, last_name, bio, hourly_rate } : teacher
				);
				setTeachers(newTeachers);
				setFilteredTeachers(newTeachers);
				setShowEditModal(false);
			})
			.catch(error => {
				console.error('Error updating data:', error);
			});
	};
	

  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedData({
      id: '',
      first_name: '',
      last_name: '',
      bio: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setDeleteId(null);
  };	

	const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredTeachers(
      teachers.filter(teacher =>
        teacher.first_name.toLowerCase().includes(term) || teacher.last_name.toLowerCase().includes(term)
      )
    );
  };

	const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedTeacher({
      id: '',
      first_name: '',
      last_name: '',
      bio: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };
	
	return (
		<section className={sectionClassName} style={sectionStyle}>
			<div className="row">
				{/*  Page Header */}
				<div className="col-lg-12 col-md-12 col-12">
					<div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
						<div className="mb-2 mb-lg-0">
							<h1 className="mb-1 tajawal-bold">
								الأساتذة
								<span className="fs-5 mx-1">(12,105)</span>
							</h1>
							{/*  Breadcrumb  */}
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item"><a href="#">User</a></li>
									<li className="breadcrumb-item active" aria-current="page">أستاذ</li>
								</ol>
							</nav>
						</div>
						<div className="nav btn-group" role="tablist">
							<div className='me-2'>
								<Link href="/admin/teachers-add" className="btn btn-primary" data-bs-target="#newCatgory" alt="">إضافة أستاذ جديد</Link>
							</div>
							<button className="btn btn-outline-secondary active" data-bs-toggle="tab" data-bs-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="true">
								<span className="fe fe-grid"></span>
							</button>
							<button className="btn btn-outline-secondary" data-bs-toggle="tab" data-bs-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="false" tabindex="-1">
								<span className="fe fe-list"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Tab */}
					<div className="tab-content">
						{/*  Tab pane */}
						<div className="tab-pane fade show active" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
							<div className="mb-4">
								<input type="search" className="form-control" placeholder="بحث عن مدرس"           value={searchTerm}
          onChange={handleSearchChange}/>
							</div>
							<div className="row">
								{filteredTeachers.map((teacher) => (
                  <div key={teacher.id} className="col-xl-3 col-lg-6 col-md-6 col-12">
                    {/* Card */}
                    <div className="card mb-4">
                      {/* Card body */}
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-11.jpg"}
                            className="rounded-circle avatar-xl mb-3"
                            alt=""
                          />
                          <h4 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h4>
                          <p className="mb-0">{`${teacher.bio}`}</p>
                        </div>
                        <div className="d-flex justify-content-between border-top py-2 mt-4">
                          <span>معدل الأجر بالساعة</span>
                          <span className="text-dark">{`${teacher.hourly_rate}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
							</div>
						</div>
						{/*  tab pane */}
						<div className="tab-pane fade" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">
							{/*  card */}
							<div className="card">
								{/*  card header */}
								<div className="card-header">
								<input
          type="search"
          className="form-control"
          placeholder="بحث عن مدرس"
          value={searchTerm}
          onChange={handleSearchChange}
        />								
				</div>
								{/*  table */}
								<div className="table-responsive">
								<table className='table mb-0 text-nowrap table-hover table-centered'>
          <thead className='table-light'>
            <tr>
              <th>الإسم</th>
              <th>الوصف</th>
              <th>معدل الأجر بالساعة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-12.jpg"} alt="" className="rounded-circle avatar-md me-2" />
                    <h5 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h5>
                  </div>
                </td>
                <td>{teacher.bio}</td>
                <td>{teacher.hourly_rate}</td>
                <td>
                  <div className="hstack gap-4">
                    <span className="dropdown dropstart">
                      <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
                        <i className="fe fe-more-vertical"></i>
                      </a>
                      <span className="dropdown-menu">
                        <span className="dropdown-header">الإعدادات</span>
                        <button className="dropdown-item" onClick={() => handleEditClick(teacher)}>
                          <i className="fe fe-edit dropdown-item-icon"></i>
                          تعديل
                        </button>
                        <button className="dropdown-item" onClick={() => handleDeleteClick(teacher.id)}>
                          <i className="fe fe-trash dropdown-item-icon"></i>
                          حذف
                        </button>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


									{/*  Pagination */}
									<div className="card-footer">
										<nav>
											<ul className="pagination justify-content-center mb-0">
												<li className="page-item disabled">
													<a className="page-link mx-1 rounded" href="#">
														<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
														</svg>
													</a>
												</li>
												<li className="page-item active">
													<a className="page-link mx-1 rounded" href="#">1</a>
												</li>
												<li className="page-item">
													<a className="page-link mx-1 rounded" href="#">2</a>
												</li>
												<li className="page-item">
													<a className="page-link mx-1 rounded" href="#">3</a>
												</li>
												<li className="page-item">
													<a className="page-link mx-1 rounded" href="#">
														<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
															<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
														</svg>
													</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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
											<input className="form-control flatpickr flatpickr-input" placeholder="حدد تاريخ" aria-describedby="basic-addon2" readOnly type="text" style={{
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

			{showEditModal && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div role="dialog" aria-modal="true" className={`fade modal ${showEditModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showEditModal ? 'block' : 'none' }}>
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
              <div className="modal-title tajawal-bold">تعديل المدرس</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseEditModal}></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">الإسم الأول</label>
                    <input
                      name="first_name"
                      placeholder="الإسم الأول"
                      required=""
                      type="text"
                      value={selectedTeacher.first_name}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">الإسم الأخير</label>
                    <input
                      name="last_name"
                      placeholder="الإسم الأخير"
                      required=""
                      type="text"
                      value={selectedTeacher.last_name}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12">
                    <label className="form-label">الوصف</label>
                    <input
                      name="bio"
                      placeholder="الوصف الكامل"
                      required=""
                      type="text"
                      value={selectedTeacher.bio}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">معدل الأجر بالساعة</label>
                    <input
                      name="hourly_rate"
                      placeholder="معدل الأجر بالساعة"
                      required=""
                      type="text"
                      value={selectedTeacher.hourly_rate}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" dir='ltr'>
              <button type="button" className="btn btn-secondary w-20" onClick={handleCloseEditModal}>إغلاق</button>
              <button type="button" className="btn btn-primary w-20" onClick={handleSaveClick}>حفظ</button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div role="dialog" aria-modal="true" className={`fade modal ${showDeleteModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div style={{
          width: "auto",
          margin: "1.75rem",
          transform: "none",
          transition: "transform .3s ease-out",
          marginLeft: "auto",
          marginRight: "auto",
          pointerEvents: "none",
          position: "relative",
          maxWidth: "30%",
          paddingTop: "10%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تأكيد الحذف</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseDeleteModal}></button>
            </div>
            <div className="modal-body">
              <p>هل أنت متأكد أنك تريد حذف هذا المعلم؟</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary w-20" onClick={handleCloseDeleteModal}>إلغاء</button>
              <button type="button" className="btn btn-danger w-20" onClick={confirmDelete}>حذف</button>
            </div>
          </div>
        </div>
      </div>



		</section>
	)
}

export default Teachers