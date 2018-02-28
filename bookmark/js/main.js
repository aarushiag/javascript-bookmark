//listen for submit

documents.getElementById('myform').addEventListener('submit',savingBookmark);

function savingBookmark(e)
{
	console.log('It is Working');
	e.preventDefault();
}