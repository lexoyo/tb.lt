


function btnClick(e)
{
if(e.keyCode==13){
perkelk();
}
}

function perkelk()
{
var url = 'https://aleph.library.lt/F/?func=find-b&request='+encodeURIComponent(document.getElementById('search_field').value)+'&find_code=WRD&adjacent=N&local_base=lka01&x=51&y=10&filter_code_1=WLN&filter_request_1=&filter_code_2=WYR&filter_request_2=&filter_code_3=WYR&filter_request_3=&filter_code_4=WFM&filter_request_4=&filter_code_5=WSF&filter_request_5=';
window.open(url,"_blank");
}

