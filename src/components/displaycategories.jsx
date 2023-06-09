import { useState, useEffect } from "react";
import React from 'react'
import axios from "axios";
import "./App.css";
import Navbar from "./navbar";
import { Outlet, Link } from "react-router-dom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SideNavbar from "./sidebar";
import { AiFillEdit } from "react-icons/ai";

import { AiTwotoneDelete } from "react-icons/ai";
const Categoriesfiles = () => {




    return (
        <div >
            <SideNavbar />

                <div className="col-lg-12 col-12 grid-margin" style={{ marginLeft: '16%', width: '83%', marginTop: '4%' }}>
                    <div className="card">

                        <div className="card-body">

                            <div style={{
                                textAlign: 'center', flexDirection: 'row'
                            }} ><img src={require("./images/ljcp.jpg")} className="mr-2" alt="face" style={{
                                width: '4%', height: '4%'
                            }} />
                                <h4 className="card-title" >Categories Files  </h4>

                            </div>
                            <p className="card-description"> Total Files: 2
                            </p>
                            <div className="card" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', margin:10}}>
                            <div className="table-responsive">
                            <table className="table table-bordered" style={{fontSize:13}} >
                                    <thead >
                                        <tr>
                                            <th> No:  </th>
                                            <th> File Name</th>

                                            <th> Category </th>
                                            <th>SubCategory</th>
                                            <th>Volume No </th>
                                            <th>Introduction </th>
                                            <th> Procedure </th>
                                            <th> Punishments</th>
                                            <th>Edit </th>
                                            <th>Delete </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr >
                                            <td>1 </td>
                                            <td>File 01</td>
                                            <td>Criminal Laws </td>
                                            <td> دھوکہ دہی </td>
                                            <td> 07 </td>
                                            <td style={{textAlign:'justify'}}> قانون بیع مال ۱۹۳۰؁ء کے تحت اگر کوئی شخص کسی سے معاہدہ کرتا ہے تو خلاف ورزی کی صورت میں وہ اس کے خلاف دعویٰ دائر کر سکتا ہے جس کی تفصیل حسبِ ذیل ہے۔ </td>
                                            <td style={{textAlign:'justify'}}> 
قیمت کے لیے دعویٰ:۔
	قانون بیع مال ۱۹۳۰؁ء کی دفعہ ۵۵ کے تحت، جب معاہدہ بیع میں مال کی ملکیت مشتری کو منتقل ہو چکی ہو اور مشتری نا جائز طور پر معاہدہ کے مطابق مال کی قیمت ادا کرنے میں غفلت برتے یا انکار کرے تو بائع قیمت کی وصولی کے لئے اس کے خلاف دعویٰ دائرکر سکتا ہے۔
	جب قیمت کی ادائیگی کسی خاص دن ہو نا قرار پائی ہو اور مال کی حوالگی سے اس کا تعلق نہ ہو لیکن مشتری نا جائز طور پر ایسی قیمت ادا کرنے میں غفلت برتے یا انکار کرے تو بائع مال کی قیمت کی وصولی کے لیے اس کے خلاف دعویٰ دائر کر سکتا ہے اگرچہ مال مشتری کو منتقل نہ ہو اہو اور اس کا اختصاص بھی معاہدہ سے نہ ہوا ہو۔
مال کی عدم قبولیت کی بناء پر جرمانے کا دعویٰ :۔
	دفعہ ۵۶ کے تحت، اگر مشتری مال قبول کرنے میں ناجائز طور پر غفلت برتے یا انکار کرے اور مال کی قیمت کی ادائیگی نہ کرے تو بائع مشتری کے خلاف مال کی عدم قبولیت کے لئے ہرجانہ کا دعویٰ کر سکتا ہے۔
مال کی حوالگی نہ ہونے پر جرمانے کا دعویٰ:۔
	دفعہ ۵۷ کے تحت، اگر بائع جائزطور پر مشتری کو مال حوالے کرنے میں غفلت برتے یا انکار کرے تو مشتری بائع کے خلاف مال کی عدم حوالگی کے خلاف ہرجانہ کا دعویٰ کر سکتا ہے۔ </td>
                                            <td style={{textAlign:'justify'}}>  تعمیل مختص:۔
	دفعہ ۵۸ کی رو سے قانون برائے دادرسی مختص مجریہ ۱۸۷۷ء ؁کے باب دوم کے احکامات کے تحت اگر کوئی مقدمہ معاہدہ تحقیق شدہ مال کی حوالگی کی خلاف ورزی کی صورت میں دائر کیا گیا ہو تو عدالت اگر مناسب سمجھے تو مدعی کی درخواست پر بذریعہ ڈگری ہدایت کرے گی کہ معاہدہ کی تعمیل مختص کی جائے، مدعاعلیہ کو یہ اختیار نہ ہو گا کہ وہ ہرجانہ ادا کر کے مال اپنے پاس رکھے۔ ڈگری غیر مشروط طور پر دی جا سکتی ہے اور مشروط طور پر ہرجانہ کی ادائیگی یا کسی دوسری صورت میں جسے عدالت توہین انصاف خیال کرے مدعی ایسی درخواست ڈگری صادر ہونے سے پہلے کسی وقت بھی پیش کر سکتا ہے۔
طمانیت کی خلاف ورزی کی صورت میں طریقہ کار:۔
	دفعہ ۵۹ کے تحت، جب بائع کی طر ف سے طمانیت کی خلاف ورزی ہو اور مشتری شرط کی خلاف ورزی کو خلاف ورزی طمانیت سے تعبیر کرے یا ایسا کرنے پر مجبور ہو تو محض خلاف ورزی طمانیت کی بناء پر وہ مال کو مسترد کرنے کا حق دار نہ ہو گا تاہم اسے اختیار حاصل ہے کہ۔
	(الف)	خلاف ورزی طمانیت کی صورت میں قیمت میں کمی یا اسے ختم کرے ۔
	(ب)	طمانیت کی خلاف ورزی کی بناء پر بائع کے خلاف ہرجانے کا دعویٰ دائر کر ے۔
	اگر مشتری نے طمانیت کی خلاف ورزی کی بناء پر قیمت میں کمی کی ہو یا معاہدے کو ختم کرایا ہو تو کوئی امر مانع نہ ہے کہ وہ خلاف ورزی طمانیت کے لیے نالش دائر کرے اگر اسے مزید نقصان ہوا ہو۔
معاہدہ کی قبل از وقت منسوخی:۔
	دفعہ ۶۰ کے تحت ، اگر کوئی شخص معاہدہ بیع کی تاریخ حوالگی سے پہلے معاہدہ کو منسوخ کر دے تو دوسرے فریق کو اختیار حاصل ہے کہ وہ معاہدے کو بحال سمجھتے ہوئے معاہدہ کو باقی سمجھ کرحوالگی کی تاریخ آنے کا انتظار کرے یا یہ کہ وہ معاہدہ کو منسوخ شدہ تصور کر کے دوسرے فریق کے خلاف ہرجانہ کا دعویٰ دائر کرے۔ </td>
                                            <td  ><button style={{
                                                textDecoration: 'none', backgroundColor: 'white', borderWidth: 0


                                            }}><AiFillEdit style={{ fontSize: '25px', color: '#1B4235' }} />


                                            </button>


                                            </td>
                                            <td >

                                                <button style={{
                                                    textDecoration: 'none', backgroundColor: 'white', borderWidth: 0


                                                }}> <AiTwotoneDelete style={{ fontSize: '25px', color: '#1B4235' }} />


                                                </button>  </td>

                                        </tr>

                                    </tbody>
                                   
                                </table>
                                <button  style={{ margin:25, padding:5,marginLeft: '40%', width: '20%', borderColor: '#1B4235', borderRadius: 5, backgroundColor: '#1B4235',color:'white' }}>Train Model</button>
</div></div>


                       
<div className="card" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', margin:10}}>
                            <div className="table-responsive">
                            <table className="table table-bordered" style={{fontSize:13}} >
                                    <thead >
                                        <tr>
                                            <th> No:  </th>
                                            <th> File Name</th>

                                            <th> Category </th>
                                            <th>SubCategory</th>
                                            <th>Volume No </th>
                                            <th>Introduction </th>
                                            <th> Procedure </th>
                                            <th> Punishments</th>
                                            <th>Edit </th>
                                            <th>Delete </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr >
                                            <td>01 </td>
                                            <td>File 02</td>
                                            <td>Criminal Laws </td>
                                            <td> دھوکہ دہی </td>
                                            <td> 07 </td>
                                            <td style={{textAlign:'justify'}}> قانون بیع مال ۱۹۳۰؁ء کے تحت اگر کوئی شخص کسی سے معاہدہ کرتا ہے تو خلاف ورزی کی صورت میں وہ اس کے خلاف دعویٰ دائر کر سکتا ہے جس کی تفصیل حسبِ ذیل ہے۔ </td>
                                            <td style={{textAlign:'justify'}}> 
قیمت کے لیے دعویٰ:۔
	قانون بیع مال ۱۹۳۰؁ء کی دفعہ ۵۵ کے تحت، جب معاہدہ بیع میں مال کی ملکیت مشتری کو منتقل ہو چکی ہو اور مشتری نا جائز طور پر معاہدہ کے مطابق مال کی قیمت ادا کرنے میں غفلت برتے یا انکار کرے تو بائع قیمت کی وصولی کے لئے اس کے خلاف دعویٰ دائرکر سکتا ہے۔
	جب قیمت کی ادائیگی کسی خاص دن ہو نا قرار پائی ہو اور مال کی حوالگی سے اس کا تعلق نہ ہو لیکن مشتری نا جائز طور پر ایسی قیمت ادا کرنے میں غفلت برتے یا انکار کرے تو بائع مال کی قیمت کی وصولی کے لیے اس کے خلاف دعویٰ دائر کر سکتا ہے اگرچہ مال مشتری کو منتقل نہ ہو اہو اور اس کا اختصاص بھی معاہدہ سے نہ ہوا ہو۔
مال کی عدم قبولیت کی بناء پر جرمانے کا دعویٰ :۔
	دفعہ ۵۶ کے تحت، اگر مشتری مال قبول کرنے میں ناجائز طور پر غفلت برتے یا انکار کرے اور مال کی قیمت کی ادائیگی نہ کرے تو بائع مشتری کے خلاف مال کی عدم قبولیت کے لئے ہرجانہ کا دعویٰ کر سکتا ہے۔
مال کی حوالگی نہ ہونے پر جرمانے کا دعویٰ:۔
	دفعہ ۵۷ کے تحت، اگر بائع جائزطور پر مشتری کو مال حوالے کرنے میں غفلت برتے یا انکار کرے تو مشتری بائع کے خلاف مال کی عدم حوالگی کے خلاف ہرجانہ کا دعویٰ کر سکتا ہے۔ </td>
                                            <td style={{textAlign:'justify'}}>  تعمیل مختص:۔
	دفعہ ۵۸ کی رو سے قانون برائے دادرسی مختص مجریہ ۱۸۷۷ء ؁کے باب دوم کے احکامات کے تحت اگر کوئی مقدمہ معاہدہ تحقیق شدہ مال کی حوالگی کی خلاف ورزی کی صورت میں دائر کیا گیا ہو تو عدالت اگر مناسب سمجھے تو مدعی کی درخواست پر بذریعہ ڈگری ہدایت کرے گی کہ معاہدہ کی تعمیل مختص کی جائے، مدعاعلیہ کو یہ اختیار نہ ہو گا کہ وہ ہرجانہ ادا کر کے مال اپنے پاس رکھے۔ ڈگری غیر مشروط طور پر دی جا سکتی ہے اور مشروط طور پر ہرجانہ کی ادائیگی یا کسی دوسری صورت میں جسے عدالت توہین انصاف خیال کرے مدعی ایسی درخواست ڈگری صادر ہونے سے پہلے کسی وقت بھی پیش کر سکتا ہے۔
طمانیت کی خلاف ورزی کی صورت میں طریقہ کار:۔
	دفعہ ۵۹ کے تحت، جب بائع کی طر ف سے طمانیت کی خلاف ورزی ہو اور مشتری شرط کی خلاف ورزی کو خلاف ورزی طمانیت سے تعبیر کرے یا ایسا کرنے پر مجبور ہو تو محض خلاف ورزی طمانیت کی بناء پر وہ مال کو مسترد کرنے کا حق دار نہ ہو گا تاہم اسے اختیار حاصل ہے کہ۔
	(الف)	خلاف ورزی طمانیت کی صورت میں قیمت میں کمی یا اسے ختم کرے ۔
	(ب)	طمانیت کی خلاف ورزی کی بناء پر بائع کے خلاف ہرجانے کا دعویٰ دائر کر ے۔
	اگر مشتری نے طمانیت کی خلاف ورزی کی بناء پر قیمت میں کمی کی ہو یا معاہدے کو ختم کرایا ہو تو کوئی امر مانع نہ ہے کہ وہ خلاف ورزی طمانیت کے لیے نالش دائر کرے اگر اسے مزید نقصان ہوا ہو۔
معاہدہ کی قبل از وقت منسوخی:۔
	دفعہ ۶۰ کے تحت ، اگر کوئی شخص معاہدہ بیع کی تاریخ حوالگی سے پہلے معاہدہ کو منسوخ کر دے تو دوسرے فریق کو اختیار حاصل ہے کہ وہ معاہدے کو بحال سمجھتے ہوئے معاہدہ کو باقی سمجھ کرحوالگی کی تاریخ آنے کا انتظار کرے یا یہ کہ وہ معاہدہ کو منسوخ شدہ تصور کر کے دوسرے فریق کے خلاف ہرجانہ کا دعویٰ دائر کرے۔ </td>
                                            <td  ><button style={{
                                                textDecoration: 'none', backgroundColor: 'white', borderWidth: 0


                                            }}><AiFillEdit style={{ fontSize: '25px', color: '#1B4235' }} />


                                            </button>


                                            </td>
                                            <td >

                                                <button style={{
                                                    textDecoration: 'none', backgroundColor: 'white', borderWidth: 0


                                                }}> <AiTwotoneDelete style={{ fontSize: '25px', color: '#1B4235' }} />


                                                </button>  </td>

                                        </tr>

                                    </tbody>
                                   
                                </table>
                                <button  style={{ margin:25, padding:5,marginLeft: '40%', width: '20%', borderColor: '#1B4235', borderRadius: 5, backgroundColor: '#1B4235',color:'white' }}>Train Model</button>
</div></div>


                       
                
                            </div>
                        </div>
                    </div>
     

        </div>
    );
};
export default Categoriesfiles



