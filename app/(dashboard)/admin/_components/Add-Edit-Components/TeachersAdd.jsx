"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
	const [formData, setFormData] = useState({
    user_id: 42, // Replace with the actual user_id you want to associate with the teacher
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: '',
    slug: ''
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

	const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual JWT token or authentication header
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://clicschool.logicielab.net/api/teachers', formData, config);
      console.log('Teacher added successfully:', response.data);
			      // If successful, show success toast
			toast.success('تم إضافة المعلم بنجاح!',{
        position: "bottom-right"
      });
		} catch (error) {
      console.error('Error adding teacher:', error);
// If there's an error, show error toast
toast.error('حدث خطأ أثناء إضافة المعلم. الرجاء المحاولة مرة أخرى.', {
	position: "bottom-right"
});
    }
  };

  return (
    <section className="container-fluid p-4">
					<div className="row">
						{/*  Page header  */}
						<div className="col-lg-12 col-md-12 col-12">
							<div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
								<div className="mb-3 mb-md-0">
									<h1 className="mb-1 tajawal-bold">إضافة أستاذ جديد</h1>
									{/*  Breadcrumb  */}
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<Link href="/admin">لوحة التحكم</Link>
											</li>
											<li className="breadcrumb-item"><a href="#">CMS</a></li>
											<li className="breadcrumb-item active" aria-current="page">إضافة أستاذ جديد</li>
										</ol>
									</nav>
								</div>
								<div>
									<Link href="/admin/teachers" className="btn btn-outline-secondary">العودة إلى كافة الأساتذة</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
					<div className="col-xl-9 col-lg-8 col-md-12 col-12 offset-xl-1 offset-lg-2">
      <div className="card border-0 mb-4">
        <div className="card-header">
          <h4 className="mb-0 tajawal-bold">تسجيل الأستاذ</h4>
        </div>
        <form className="needs-validation" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="mb-3 col-md-9">
              <label htmlFor="first_name" className="form-label">الإسم الأول</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                className="form-control text-dark"
                placeholder="الإسم الأول"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 col-md-9">
              <label htmlFor="last_name" className="form-label">الإسم الأخير</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                className="form-control text-dark"
                placeholder="الإسم الأخير"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 col-md-9">
              <label htmlFor="bio" className="form-label">السيرة الذاتية</label>
              <textarea
                rows="3"
                id="bio"
                name="bio"
                className="form-control text-dark"
                placeholder="السيرة الذاتية"
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="hourly_rate" className="form-label">معدل الأجر بالساعة</label>
              <input
                type="text"
                id="hourly_rate"
                name="hourly_rate"
                className="form-control text-dark"
                placeholder="معدل الأجر بالساعة"
                value={formData.hourly_rate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 col-md-9">
              <label htmlFor="slug" className="form-label">السمة</label>
              <input
                type="text"
                id="slug"
                name="slug"
                className="form-control text-dark"
                placeholder="السمة"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-20">إضافة</button>
          </div>
        </form>
      </div>
    </div>
					</div>
				</section>
  )
}

export default Page