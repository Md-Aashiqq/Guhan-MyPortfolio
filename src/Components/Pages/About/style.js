import styled from "styled-components";

const StyledAbout = styled.div`
    .about_container{
        display: flex;
        justify-content: space-around;
        padding: 4rem 0;
    }
    .profile_image_col{
        width: 50%;
        display: flex;
        justify-content: center;
    }
    .profile_img_circle{
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        background: #e7f0f9;
        box-shadow: 0px 3px 6px #00000014;
        .profile_img{
            width: 92%;
            height: 95%;
            border-radius: 50%;
        }
    }
    .name_text{
        font-size: 45px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        margin-top: 5px;
    }
    .about_me_text{
        color: #e60280;
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 800;
        margin-bottom: 0;
    }
    .home_action_btns_wrap{
        display: flex;
        gap: 1rem;
        margin-top: 10px;
        .my_skills_btn{
             cursor: pointer;
            border: none;
            outline: none;
            width: 120px;
            height: 40px;
            box-shadow: 0px 3px 6px #00000014;
            background: transparent linear-gradient(180deg, #e7f0f9 0%, #f8fbfe 100%) 0% 0% no-repeat padding-box;
        }
        .active_my_skills_btn{
            color: #fff;
            cursor: pointer;
            border: none;
            outline: none;
            width: 120px;
            height: 40px;
            box-shadow: 0px 3px 6px #00000014;
            background: transparent linear-gradient(180deg, #7a0caa 0%, #e30280 100%) 0% 0% no-repeat padding-box;
        }
        .download_cv_btn{
            cursor: pointer;
            border: none;
            outline: none;
            width: 120px;
            height: 40px;
            box-shadow: 0px 3px 6px #00000014;
            background: transparent linear-gradient(180deg, #e7f0f9 0%, #f8fbfe 100%) 0% 0% no-repeat padding-box;
        }
    }
    .about_main_contents_wrap{
        width: 75%;
        text-align: left;
    }
    .skills_explain{
        width: 75%;
    }
    .skills_wrapper{
        display: flex;
        gap: 10px;
    }

    .skill_pointer{
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid blue;
        margin-top: 10px;
        .skill_inside_pointer{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: red;
        }
    }
    .skills_known{
        margin-top: 10px;
        margin-bottom: 5px;
        font: 16px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
    }
    .skills_content{
        font: normal normal normal 16px/20px;
        color: #181818;
        opacity: 0.4;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .skills_arrow{
        color: #181818;
        opacity: 1;
    }
    .download_cv_btn{
        cursor: pointer;
        border: none;
        outline: none;
        width: 120px;
        height: 40px;
        box-shadow: 0px 3px 6px #00000014;
        background: transparent linear-gradient(180deg, #e7f0f9 0%, #f8fbfe 100%) 0% 0% no-repeat padding-box;
    }
    @media (min-width: 320px) and (max-width: 480px){
        .about_container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .profile_image_col {
            width: 100%;
            display: flex;
            justify-content: center;
            display: none;
        }
        .about_main_contents_wrap {
            width: 100%;
            text-align: left;
            padding: 1rem 2rem;
        }
        .footer_contact_wrapper {
            flex-direction: column;
        }
        .skills_explain {
            width: 100%;
        }
    }
    @media (min-width: 481px) and (max-width: 766px){
        .about_container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .profile_image_col {
            width: 100%;
            display: flex;
            justify-content: center;
            display: none;
        }
        .about_main_contents_wrap {
            width: 100%;
            text-align: left;
            padding: 1rem 2rem;
        }
        .skills_explain {
            width: 100%;
        }
    }
`;

export default StyledAbout;
