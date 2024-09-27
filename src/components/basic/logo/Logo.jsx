import Styles from "./Logo.module.css";
import cn from "classname";

function Logo() {
    return (
        <svg className={Styles.logo} onClick={() => window.location.reload()} width="176" height="76" viewBox="0 0 176 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_49)">
                <rect width="176" height="76" fill="white" />
                <path d="M38.2295 69.5596C28.8034 67.9106 4.74726 57.8138 2.65388 40.2934C0.280977 60.856 27.9529 72.6911 38.2295 74.4889L62.6782 50.0151V45.2108L38.2295 69.5596Z" fill="#202023" fill-opacity="0.9" />
                <path d="M58.0806 13.7597C47.9824 18.2485 39.1271 24.1184 42.1245 30.1252C47.1379 19.5046 81.7263 8.42558 81.7263 8.42558C81.7263 8.42558 81.9464 5.97878 81.9464 4.60358C79.5556 5.44299 63.546 11.4617 61.0185 12.5036L58.0806 13.7597Z" fill="#202023" fill-opacity="0.9" />
                <path d="M62.6782 40.6565C57.8432 38.2574 52.4194 35.3819 46.2701 31.3218C25.0627 17.3197 81.7209 2.54375 81.7209 2.54375C81.7209 2.54375 16.5285 -4.95737 4.47968 24.0946C-5.79099 48.872 26.8587 63.142 38.2296 65.1304L62.6782 40.6565ZM52.0031 6.12763C53.1033 5.88949 54.5961 5.62754 56.0769 5.35369C57.5637 5.10961 59.0504 4.84767 60.1685 4.69289C61.2866 4.5262 62.03 4.41308 62.03 4.41308L62.1311 5.05603C62.1311 5.05603 61.3936 5.19296 60.2874 5.39537C59.1753 5.59183 57.7064 5.89544 56.2375 6.1931C54.7745 6.51458 53.3115 6.8182 52.2172 7.09205C51.1229 7.35399 50.3855 7.53259 50.3855 7.53259L50.1595 6.50862C50.1595 6.50862 50.8969 6.35979 52.0031 6.13357V6.12763ZM34.2391 11.2415C34.7565 11.0212 35.369 10.7652 36.0529 10.5271C36.725 10.283 37.4446 10.0091 38.1642 9.7591C38.8838 9.52692 39.6093 9.29475 40.2873 9.07448C40.9653 8.84826 41.6075 8.67561 42.1487 8.51487C43.243 8.2053 43.9686 7.99098 43.9686 7.99098L44.3135 9.19949C44.3135 9.19949 43.5998 9.42573 42.5294 9.77102C41.9941 9.94366 41.3697 10.1342 40.7095 10.3782C40.0494 10.6164 39.3476 10.8664 38.6459 11.1224C37.956 11.3903 37.2721 11.6761 36.6239 11.9321C35.9816 12.1761 35.3809 12.45 34.8695 12.6881C33.8406 13.1584 33.1567 13.474 33.1567 13.474L32.4906 11.9559C32.4906 11.9559 33.1864 11.6641 34.2272 11.2296L34.2391 11.2415ZM25.3124 42.1984C25.3124 42.1984 25.1816 42.0615 24.9556 41.8293C24.7356 41.6031 24.3787 41.2281 23.9862 40.7935C23.2012 39.9184 22.1962 38.7039 21.3279 37.3644C20.4477 36.0428 19.7221 34.5961 19.294 33.4531C19.0739 32.8875 18.9252 32.3994 18.8301 32.0541C18.7349 31.7088 18.6814 31.5123 18.6814 31.5123L21.0603 30.8932C21.0603 30.8932 21.1078 31.0599 21.197 31.3457C21.2862 31.6314 21.429 32.0422 21.6252 32.5184C22.0177 33.4829 22.6838 34.7212 23.5105 35.882C24.3193 37.0489 25.2708 38.1324 26.0142 38.9182C26.3889 39.3111 26.6862 39.6088 26.9301 39.8469C27.1679 40.0731 27.3047 40.21 27.3047 40.21L25.3184 42.1984H25.3124ZM27.4356 16.8732C27.1739 17.0578 26.8111 17.3317 26.3829 17.671C25.5384 18.3556 24.4501 19.3141 23.5402 20.4036C23.0823 20.9453 22.666 21.5109 22.321 22.0705C21.9702 22.6241 21.6966 23.1599 21.4944 23.6362C21.3933 23.8743 21.2981 24.0886 21.2387 24.2732C21.1732 24.4637 21.1138 24.6065 21.0662 24.7792C20.977 25.1007 20.9235 25.2793 20.9235 25.2793L18.7647 24.6125C18.7647 24.6125 18.8241 24.4339 18.9252 24.1184C18.9669 23.9696 19.062 23.7493 19.1512 23.5052C19.2404 23.2551 19.3594 22.9992 19.4902 22.7193C19.7519 22.1657 20.0968 21.5347 20.525 20.9096C20.9473 20.2726 21.4468 19.6415 21.9821 19.0522C23.0466 17.8555 24.2657 16.8554 25.1994 16.1529C25.6693 15.8017 26.0677 15.5219 26.3472 15.3373C26.6327 15.1468 26.7933 15.0397 26.7933 15.0397L27.834 16.5875C27.834 16.5875 27.6853 16.6946 27.4296 16.8792L27.4356 16.8732ZM33.3648 48.8006C32.7642 48.4077 32.223 48.0029 31.7651 47.6576C30.8373 46.967 30.2188 46.5086 30.2188 46.5086L32.0208 44.1094C32.0208 44.1094 32.6215 44.5321 33.5314 45.1632C33.9774 45.4787 34.5067 45.8478 35.0955 46.2109C35.6783 46.58 36.3027 46.9789 36.9212 47.3718C37.5516 47.7469 38.182 48.116 38.7767 48.4672C39.3595 48.8185 39.9483 49.134 40.436 49.4078C41.4232 49.9555 42.0833 50.3127 42.0833 50.3127L40.4241 53.2239C40.4241 53.2239 39.7758 52.8429 38.8065 52.2714C38.3188 51.9856 37.7538 51.6582 37.1413 51.2653C36.5287 50.8783 35.8805 50.4675 35.2263 50.0568C34.5899 49.6222 33.9536 49.1935 33.3589 48.7887L33.3648 48.8006Z" fill="url(#paint0_linear_14_49)" />
                <path d="M83.331 26.6982L79.6469 38.25H76.2373L81.5184 23.9842H83.6739L83.331 26.6982ZM86.3879 38.25L82.6941 26.6982L82.312 23.9842H84.4969L89.7976 38.25H86.3879ZM86.2312 32.9395V35.4086H78.7945V32.9395H86.2312ZM99.7907 33.4686H102.965C102.913 34.4484 102.645 35.3139 102.162 36.0651C101.685 36.8097 101.022 37.3943 100.173 37.8189C99.3237 38.2369 98.3145 38.446 97.1453 38.446C96.2112 38.446 95.3751 38.2859 94.637 37.9659C93.8989 37.6458 93.2718 37.1886 92.7558 36.5941C92.2463 35.9932 91.8544 35.2714 91.5801 34.4288C91.3122 33.5796 91.1783 32.6227 91.1783 31.558V30.686C91.1783 29.6213 91.3188 28.6643 91.5997 27.8152C91.8805 26.966 92.2822 26.241 92.8048 25.64C93.3274 25.0391 93.9544 24.5786 94.686 24.2585C95.4176 23.9385 96.2341 23.7784 97.1355 23.7784C98.3504 23.7784 99.376 23.9973 100.212 24.4349C101.048 24.8725 101.695 25.4735 102.152 26.2377C102.616 27.002 102.893 27.874 102.985 28.8538H99.8005C99.7744 28.2986 99.6699 27.8315 99.487 27.4527C99.3041 27.0673 99.0232 26.7766 98.6444 26.5806C98.2655 26.3847 97.7626 26.2867 97.1355 26.2867C96.6783 26.2867 96.2765 26.3716 95.9303 26.5415C95.5907 26.7113 95.3065 26.9758 95.0779 27.3351C94.8558 27.6943 94.6893 28.1516 94.5782 28.7068C94.4672 29.2555 94.4117 29.9087 94.4117 30.6664V31.558C94.4117 32.3092 94.4607 32.9591 94.5586 33.5078C94.6566 34.0565 94.8134 34.5105 95.0289 34.8697C95.251 35.229 95.5352 35.4968 95.8814 35.6731C96.2276 35.8495 96.6489 35.9377 97.1453 35.9377C97.7136 35.9377 98.1871 35.8495 98.566 35.6731C98.9448 35.4902 99.2355 35.2159 99.438 34.8501C99.6405 34.4843 99.7581 34.0238 99.7907 33.4686ZM111.018 25.2285H114.389C115.245 25.2285 116.032 25.369 116.75 25.6498C117.475 25.9307 118.106 26.3324 118.641 26.855C119.177 27.3775 119.592 28.0046 119.886 28.7362C120.179 29.4678 120.326 30.2875 120.326 31.1955C120.326 32.0773 120.179 32.8775 119.886 33.596C119.592 34.308 119.177 34.922 118.641 35.438C118.106 35.9475 117.475 36.3394 116.75 36.6137C116.032 36.8816 115.245 37.0155 114.389 37.0155H111.018C110.156 37.0155 109.363 36.8816 108.637 36.6137C107.912 36.3394 107.279 35.9475 106.737 35.438C106.201 34.9285 105.786 34.3178 105.492 33.6058C105.198 32.8938 105.051 32.0969 105.051 31.2151C105.051 30.3071 105.198 29.4874 105.492 28.7558C105.786 28.0242 106.201 27.3939 106.737 26.8648C107.279 26.3357 107.912 25.9307 108.637 25.6498C109.363 25.369 110.156 25.2285 111.018 25.2285ZM111.018 27.7858C110.444 27.7858 109.931 27.9132 109.48 28.1679C109.036 28.4227 108.686 28.8048 108.432 29.3143C108.184 29.8172 108.059 30.4508 108.059 31.2151C108.059 31.7507 108.131 32.2243 108.275 32.6358C108.425 33.0408 108.634 33.3772 108.902 33.645C109.176 33.9128 109.493 34.1153 109.852 34.2524C110.212 34.3896 110.6 34.4582 111.018 34.4582H114.408C114.977 34.4582 115.476 34.3374 115.908 34.0957C116.345 33.8475 116.688 33.4784 116.936 32.9885C117.185 32.4986 117.309 31.9009 117.309 31.1955C117.309 30.6272 117.237 30.1308 117.093 29.7062C116.949 29.2816 116.747 28.9289 116.486 28.648C116.231 28.3606 115.927 28.1451 115.574 28.0013C115.222 27.8576 114.833 27.7858 114.408 27.7858H111.018ZM114.232 23.3963V38.8379H111.175V23.3963H114.232ZM128.869 26.6982L125.185 38.25H121.776L127.057 23.9842H129.212L128.869 26.6982ZM131.926 38.25L128.233 26.6982L127.85 23.9842H130.035L135.336 38.25H131.926ZM131.77 32.9395V35.4086H124.333V32.9395H131.77ZM147.103 23.9842V26.4631H139.872V23.9842H147.103ZM149.317 23.9842V38.25H146.123V23.9842H149.317ZM139.568 23.9842H142.743L142.38 31.1955C142.321 32.2733 142.213 33.2106 142.057 34.0075C141.906 34.7979 141.697 35.4674 141.43 36.0161C141.168 36.5582 140.852 36.9959 140.479 37.329C140.107 37.6556 139.673 37.8907 139.176 38.0344C138.68 38.1781 138.115 38.25 137.481 38.25H136.707V35.7809L137.079 35.7417C137.393 35.7156 137.664 35.6339 137.893 35.4968C138.128 35.3596 138.33 35.1571 138.5 34.8893C138.67 34.615 138.81 34.2655 138.921 33.8409C139.039 33.4163 139.13 32.9003 139.196 32.2928C139.268 31.6854 139.317 30.9734 139.343 30.1569L139.568 23.9842ZM154.509 29.0399H157.703C158.84 29.0399 159.826 29.2294 160.662 29.6082C161.498 29.9871 162.142 30.5194 162.592 31.2053C163.043 31.8846 163.268 32.6815 163.268 33.596C163.268 34.2818 163.138 34.9089 162.877 35.4772C162.622 36.0455 162.25 36.5386 161.76 36.9567C161.276 37.3682 160.692 37.6883 160.006 37.9169C159.326 38.139 158.559 38.25 157.703 38.25H152.471V23.9842H155.675V35.7809H157.703C158.226 35.7809 158.663 35.6829 159.016 35.487C159.369 35.2845 159.633 35.0167 159.81 34.6835C159.993 34.3504 160.084 33.9814 160.084 33.5764C160.084 33.1779 159.993 32.8252 159.81 32.5182C159.633 32.2047 159.369 31.9597 159.016 31.7834C158.663 31.6005 158.226 31.509 157.703 31.509H154.509V29.0399ZM171.204 23.9842V38.25H168.02V23.9842H171.204ZM175.545 23.9842V26.4631H163.767V23.9842H175.545Z" fill="#121212" />
                <path d="M82.4811 47.0627V48.3021H79.3262V54.1956H77.734V47.0627H82.4811ZM78.7579 49.5906H80.3549C80.9232 49.5906 81.4164 49.6853 81.8344 49.8747C82.2525 50.0641 82.5742 50.3303 82.7995 50.6732C83.0249 51.0129 83.1376 51.4113 83.1376 51.8686C83.1376 52.2115 83.0722 52.525 82.9416 52.8092C82.8142 53.0933 82.6281 53.3399 82.3831 53.5489C82.1414 53.7547 81.8491 53.9147 81.5062 54.029C81.1665 54.1401 80.7828 54.1956 80.3549 54.1956H77.7389V47.0627H79.3409V52.961H80.3549C80.6162 52.961 80.835 52.9121 81.0114 52.8141C81.1878 52.7128 81.32 52.5789 81.4082 52.4124C81.4997 52.2458 81.5454 52.0613 81.5454 51.8588C81.5454 51.6596 81.4997 51.4832 81.4082 51.3297C81.32 51.1729 81.1878 51.0504 81.0114 50.9623C80.835 50.8708 80.6162 50.8251 80.3549 50.8251H78.7579V49.5906ZM88.8204 47.0627V48.3021H85.2049V47.0627H88.8204ZM89.9275 47.0627V54.1956H88.3305V47.0627H89.9275ZM85.0531 47.0627H86.6403L86.4591 50.6683C86.4297 51.2072 86.3758 51.6759 86.2974 52.0743C86.2223 52.4695 86.1178 52.8043 85.9839 53.0786C85.8532 53.3497 85.6948 53.5685 85.5087 53.7351C85.3225 53.8984 85.1053 54.016 84.8571 54.0878C84.6089 54.1597 84.3264 54.1956 84.0096 54.1956H83.6226V52.961L83.8087 52.9415C83.9655 52.9284 84.101 52.8876 84.2153 52.819C84.3329 52.7504 84.4342 52.6491 84.5191 52.5152C84.604 52.3781 84.6742 52.2033 84.7297 51.991C84.7885 51.7788 84.8342 51.5207 84.8669 51.217C84.9028 50.9133 84.9273 50.5573 84.9404 50.149L85.0531 47.0627ZM94.1554 48.4197L92.3133 54.1956H90.6085L93.249 47.0627H94.3268L94.1554 48.4197ZM95.6838 54.1956L93.8369 48.4197L93.6459 47.0627H94.7383L97.3887 54.1956H95.6838ZM95.6054 51.5403V52.7749H91.8871V51.5403H95.6054ZM102.729 47.0627V48.3021H99.5736V54.1956H97.9814V47.0627H102.729ZM109.19 50.4724V50.7908C109.19 51.333 109.115 51.8196 108.965 52.2507C108.818 52.6818 108.607 53.0492 108.333 53.353C108.062 53.6567 107.739 53.8902 107.363 54.0535C106.991 54.2136 106.578 54.2936 106.124 54.2936C105.67 54.2936 105.255 54.2136 104.879 54.0535C104.504 53.8902 104.177 53.6567 103.899 53.353C103.625 53.0492 103.413 52.6818 103.263 52.2507C103.112 51.8196 103.037 51.333 103.037 50.7908V50.4724C103.037 49.9302 103.112 49.4436 103.263 49.0125C103.413 48.5781 103.623 48.209 103.895 47.9053C104.169 47.6016 104.494 47.3697 104.869 47.2097C105.245 47.0464 105.66 46.9647 106.114 46.9647C106.568 46.9647 106.982 47.0464 107.358 47.2097C107.734 47.3697 108.057 47.6016 108.328 47.9053C108.602 48.209 108.815 48.5781 108.965 49.0125C109.115 49.4436 109.19 49.9302 109.19 50.4724ZM107.579 50.7908V50.4626C107.579 50.1 107.546 49.78 107.481 49.5024C107.415 49.2215 107.321 48.9863 107.196 48.7969C107.072 48.6075 106.919 48.4654 106.736 48.3707C106.553 48.2727 106.346 48.2237 106.114 48.2237C105.872 48.2237 105.661 48.2727 105.482 48.3707C105.302 48.4654 105.15 48.6075 105.026 48.7969C104.905 48.9863 104.812 49.2215 104.747 49.5024C104.685 49.78 104.654 50.1 104.654 50.4626V50.7908C104.654 51.1501 104.685 51.4701 104.747 51.751C104.812 52.0286 104.907 52.2638 105.031 52.4565C105.155 52.6491 105.307 52.7945 105.487 52.8925C105.67 52.9904 105.882 53.0394 106.124 53.0394C106.355 53.0394 106.561 52.9904 106.741 52.8925C106.924 52.7945 107.077 52.6491 107.201 52.4565C107.325 52.2638 107.419 52.0286 107.481 51.751C107.546 51.4701 107.579 51.1501 107.579 50.7908ZM112.424 51.5599L114.138 47.0627H115.838L113.413 52.7651C113.325 52.9676 113.224 53.1619 113.109 53.3481C112.995 53.531 112.86 53.6943 112.703 53.838C112.549 53.9784 112.365 54.0911 112.149 54.176C111.937 54.2576 111.686 54.2985 111.395 54.2985C111.32 54.2985 111.23 54.2968 111.125 54.2936C111.024 54.2903 110.939 54.287 110.871 54.2838L110.851 53.0443C110.894 53.0541 110.954 53.0607 111.032 53.0639C111.114 53.0639 111.171 53.0639 111.204 53.0639C111.4 53.0639 111.553 53.0378 111.664 52.9855C111.779 52.9333 111.868 52.8582 111.934 52.7602C112.002 52.6622 112.063 52.5397 112.115 52.3928L112.424 51.5599ZM111.361 47.0627L112.909 50.3744L113.413 52.1772L112.252 52.187L109.661 47.0627H111.361ZM120.502 51.8049H122.089C122.063 52.2948 121.929 52.7275 121.688 53.1031C121.449 53.4754 121.118 53.7677 120.693 53.98C120.269 54.1891 119.764 54.2936 119.179 54.2936C118.712 54.2936 118.294 54.2136 117.925 54.0535C117.556 53.8935 117.243 53.6649 116.985 53.3677C116.73 53.0672 116.534 52.7063 116.397 52.285C116.263 51.8604 116.196 51.3819 116.196 50.8496V50.4136C116.196 49.8812 116.266 49.4028 116.406 48.9782C116.547 48.5536 116.748 48.1911 117.009 47.8906C117.27 47.5901 117.584 47.3599 117.95 47.1999C118.315 47.0398 118.724 46.9598 119.174 46.9598C119.782 46.9598 120.295 47.0692 120.713 47.288C121.131 47.5069 121.454 47.8073 121.683 48.1894C121.915 48.5716 122.053 49.0076 122.099 49.4975H120.507C120.494 49.2199 120.442 48.9863 120.35 48.7969C120.259 48.6042 120.118 48.4589 119.929 48.3609C119.739 48.2629 119.488 48.2139 119.174 48.2139C118.946 48.2139 118.745 48.2564 118.572 48.3413C118.402 48.4262 118.26 48.5585 118.146 48.7381C118.035 48.9178 117.951 49.1464 117.896 49.424C117.84 49.6983 117.812 50.0249 117.812 50.4038V50.8496C117.812 51.2252 117.837 51.5501 117.886 51.8245C117.935 52.0988 118.013 52.3258 118.121 52.5054C118.232 52.6851 118.374 52.819 118.547 52.9072C118.72 52.9953 118.931 53.0394 119.179 53.0394C119.463 53.0394 119.7 52.9953 119.89 52.9072C120.079 52.8157 120.224 52.6785 120.326 52.4956C120.427 52.3127 120.486 52.0825 120.502 51.8049ZM126.151 47.0627V54.1956H124.558V47.0627H126.151ZM128.321 47.0627V48.3021H122.432V47.0627H128.321ZM131.922 51.7167H130.129V50.4773H131.922C132.186 50.4773 132.398 50.4332 132.558 50.345C132.722 50.2568 132.841 50.136 132.916 49.9825C132.994 49.8257 133.034 49.6493 133.034 49.4534C133.034 49.2509 132.994 49.0631 132.916 48.89C132.841 48.7136 132.722 48.5716 132.558 48.4638C132.398 48.356 132.186 48.3021 131.922 48.3021H130.707V54.1956H129.11V47.0627H131.922C132.49 47.0627 132.976 47.1656 133.381 47.3713C133.79 47.5771 134.102 47.8596 134.317 48.2188C134.536 48.5748 134.645 48.9831 134.645 49.4436C134.645 49.9041 134.536 50.3042 134.317 50.6438C134.102 50.9835 133.79 51.248 133.381 51.4375C132.976 51.6236 132.49 51.7167 131.922 51.7167ZM141.563 50.4724V50.7908C141.563 51.333 141.488 51.8196 141.337 52.2507C141.19 52.6818 140.98 53.0492 140.705 53.353C140.434 53.6567 140.111 53.8902 139.735 54.0535C139.363 54.2136 138.95 54.2936 138.496 54.2936C138.042 54.2936 137.627 54.2136 137.252 54.0535C136.876 53.8902 136.549 53.6567 136.272 53.353C135.997 53.0492 135.785 52.6818 135.635 52.2507C135.485 51.8196 135.41 51.333 135.41 50.7908V50.4724C135.41 49.9302 135.485 49.4436 135.635 49.0125C135.785 48.5781 135.996 48.209 136.267 47.9053C136.541 47.6016 136.866 47.3697 137.242 47.2097C137.617 47.0464 138.032 46.9647 138.486 46.9647C138.94 46.9647 139.355 47.0464 139.73 47.2097C140.106 47.3697 140.429 47.6016 140.7 47.9053C140.975 48.209 141.187 48.5781 141.337 49.0125C141.488 49.4436 141.563 49.9302 141.563 50.4724ZM139.951 50.7908V50.4626C139.951 50.1 139.918 49.78 139.853 49.5024C139.788 49.2215 139.693 48.9863 139.569 48.7969C139.445 48.6075 139.291 48.4654 139.108 48.3707C138.925 48.2727 138.718 48.2237 138.486 48.2237C138.244 48.2237 138.034 48.2727 137.854 48.3707C137.675 48.4654 137.523 48.6075 137.399 48.7969C137.278 48.9863 137.185 49.2215 137.119 49.5024C137.057 49.78 137.026 50.1 137.026 50.4626V50.7908C137.026 51.1501 137.057 51.4701 137.119 51.751C137.185 52.0286 137.279 52.2638 137.403 52.4565C137.528 52.6491 137.679 52.7945 137.859 52.8925C138.042 52.9904 138.254 53.0394 138.496 53.0394C138.728 53.0394 138.934 52.9904 139.113 52.8925C139.296 52.7945 139.45 52.6491 139.574 52.4565C139.698 52.2638 139.791 52.0286 139.853 51.751C139.918 51.4701 139.951 51.1501 139.951 50.7908ZM144.061 51.7265L146.78 47.0627H148.372V54.1956H146.78V49.5367L144.061 54.1956H142.469V47.0627H144.061V51.7265ZM146.124 45.1668H147.192C147.192 45.4542 147.12 45.7089 146.976 45.931C146.832 46.1531 146.628 46.3262 146.364 46.4503C146.102 46.5744 145.792 46.6365 145.433 46.6365C144.894 46.6365 144.466 46.5009 144.149 46.2299C143.833 45.9555 143.674 45.6012 143.674 45.1668H144.737C144.737 45.3333 144.79 45.4819 144.894 45.6126C145.002 45.74 145.181 45.8036 145.433 45.8036C145.688 45.8036 145.866 45.74 145.967 45.6126C146.071 45.4819 146.124 45.3333 146.124 45.1668ZM153.629 51.8049H155.216C155.19 52.2948 155.056 52.7275 154.814 53.1031C154.576 53.4754 154.245 53.7677 153.82 53.98C153.395 54.1891 152.891 54.2936 152.306 54.2936C151.839 54.2936 151.421 54.2136 151.052 54.0535C150.683 53.8935 150.369 53.6649 150.111 53.3677C149.857 53.0672 149.661 52.7063 149.524 52.285C149.39 51.8604 149.323 51.3819 149.323 50.8496V50.4136C149.323 49.8812 149.393 49.4028 149.533 48.9782C149.674 48.5536 149.875 48.1911 150.136 47.8906C150.397 47.5901 150.711 47.3599 151.077 47.1999C151.442 47.0398 151.851 46.9598 152.301 46.9598C152.909 46.9598 153.421 47.0692 153.84 47.288C154.258 47.5069 154.581 47.8073 154.81 48.1894C155.041 48.5716 155.18 49.0076 155.226 49.4975H153.634C153.621 49.2199 153.568 48.9863 153.477 48.7969C153.386 48.6042 153.245 48.4589 153.056 48.3609C152.866 48.2629 152.615 48.2139 152.301 48.2139C152.073 48.2139 151.872 48.2564 151.699 48.3413C151.529 48.4262 151.387 48.5585 151.272 48.7381C151.161 48.9178 151.078 49.1464 151.023 49.424C150.967 49.6983 150.939 50.0249 150.939 50.4038V50.8496C150.939 51.2252 150.964 51.5501 151.013 51.8245C151.062 52.0988 151.14 52.3258 151.248 52.5054C151.359 52.6851 151.501 52.819 151.674 52.9072C151.847 52.9953 152.058 53.0394 152.306 53.0394C152.59 53.0394 152.827 52.9953 153.017 52.9072C153.206 52.8157 153.351 52.6785 153.453 52.4956C153.554 52.3127 153.613 52.0825 153.629 51.8049ZM159.277 47.0627V54.1956H157.685V47.0627H159.277ZM161.448 47.0627V48.3021H155.559V47.0627H161.448ZM165.088 51.1141H163.255L163.246 50.0462H164.759C165.027 50.0462 165.244 50.0135 165.411 49.9482C165.581 49.8829 165.705 49.7881 165.783 49.664C165.862 49.5367 165.901 49.3799 165.901 49.1937C165.901 48.9814 165.862 48.81 165.783 48.6793C165.705 48.5487 165.581 48.454 165.411 48.3952C165.244 48.3331 165.029 48.3021 164.764 48.3021H163.833V54.1956H162.236V47.0627H164.764C165.192 47.0627 165.574 47.1019 165.911 47.1803C166.247 47.2586 166.533 47.3795 166.768 47.5428C167.006 47.7061 167.188 47.9102 167.312 48.1552C167.436 48.4001 167.498 48.6891 167.498 49.0223C167.498 49.3129 167.433 49.584 167.302 49.8355C167.175 50.087 166.969 50.2911 166.685 50.4479C166.401 50.6046 166.02 50.6896 165.543 50.7026L165.088 51.1141ZM165.024 54.1956H162.849L163.427 52.961H165.024C165.269 52.961 165.468 52.9219 165.622 52.8435C165.775 52.7651 165.888 52.6589 165.96 52.525C166.031 52.3911 166.067 52.2409 166.067 52.0743C166.067 51.8784 166.033 51.7085 165.964 51.5648C165.899 51.4211 165.795 51.3101 165.651 51.2317C165.511 51.1533 165.323 51.1141 165.088 51.1141H163.657L163.667 50.0462H165.416L165.788 50.4675C166.242 50.4577 166.605 50.5312 166.876 50.6879C167.15 50.8414 167.348 51.0439 167.468 51.2954C167.589 51.5469 167.65 51.8131 167.65 52.0939C167.65 52.5577 167.55 52.9463 167.351 53.2599C167.152 53.5702 166.856 53.8037 166.464 53.9604C166.076 54.1172 165.595 54.1956 165.024 54.1956ZM174.631 50.4724V50.7908C174.631 51.333 174.556 51.8196 174.405 52.2507C174.258 52.6818 174.048 53.0492 173.773 53.353C173.502 53.6567 173.179 53.8902 172.803 54.0535C172.431 54.2136 172.018 54.2936 171.564 54.2936C171.11 54.2936 170.695 54.2136 170.32 54.0535C169.944 53.8902 169.617 53.6567 169.34 53.353C169.066 53.0492 168.853 52.6818 168.703 52.2507C168.553 51.8196 168.478 51.333 168.478 50.7908V50.4724C168.478 49.9302 168.553 49.4436 168.703 49.0125C168.853 48.5781 169.064 48.209 169.335 47.9053C169.609 47.6016 169.934 47.3697 170.31 47.2097C170.685 47.0464 171.1 46.9647 171.554 46.9647C172.008 46.9647 172.423 47.0464 172.799 47.2097C173.174 47.3697 173.497 47.6016 173.769 47.9053C174.043 48.209 174.255 48.5781 174.405 49.0125C174.556 49.4436 174.631 49.9302 174.631 50.4724ZM173.019 50.7908V50.4626C173.019 50.1 172.986 49.78 172.921 49.5024C172.856 49.2215 172.761 48.9863 172.637 48.7969C172.513 48.6075 172.359 48.4654 172.176 48.3707C171.993 48.2727 171.786 48.2237 171.554 48.2237C171.313 48.2237 171.102 48.2727 170.922 48.3707C170.743 48.4654 170.591 48.6075 170.467 48.7969C170.346 48.9863 170.253 49.2215 170.187 49.5024C170.125 49.78 170.094 50.1 170.094 50.4626V50.7908C170.094 51.1501 170.125 51.4701 170.187 51.751C170.253 52.0286 170.347 52.2638 170.472 52.4565C170.596 52.6491 170.748 52.7945 170.927 52.8925C171.11 52.9904 171.322 53.0394 171.564 53.0394C171.796 53.0394 172.002 52.9904 172.181 52.8925C172.364 52.7945 172.518 52.6491 172.642 52.4565C172.766 52.2638 172.859 52.0286 172.921 51.751C172.986 51.4701 173.019 51.1501 173.019 50.7908Z" fill="#121212" />
            </g>
            <defs>
                <linearGradient id="paint0_linear_14_49" x1="42.1131" y1="64.9459" x2="42.1131" y2="12.5036" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#999999" />
                    <stop offset="1" stop-color="#7C7C7C" />
                </linearGradient>
                <clipPath id="clip0_14_49">
                    <rect width="176" height="76" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Logo;