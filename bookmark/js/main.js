//listen for submit

documents.getElementById('myform').addEventListener('submit',savingBookmark);

function savingBookmark(e)
{
	var siteName=document.getElementById('siteName').value;
	var siteUrl=document.getElementById('siteUrl').value;

	console.log('It is Working');
	e.preventDefault();
}