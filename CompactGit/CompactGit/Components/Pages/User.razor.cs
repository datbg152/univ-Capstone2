using CompactGit.Utils;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;

namespace CompactGit.Components.Pages
{
    public partial class User
    {
        [Parameter] 
        public string UserUrl { get; set; } = default!;

        [Inject]
        public NavigationManager NavigationManager { get; set; } = default!;

        [Inject]
        public ICookie Cookie { get; set; } = default!;

        private string FindInput { get; set; } = "";

        private void FindReposButtonClick(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/repos/" + FindInput);
        }

        private void ReposButtonClick(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/repos/" + UserUrl);
        }

        private async Task SettingsButtonClickAsync(MouseEventArgs e)
        {
            string msg = await Cookie.GetValue(UserUrl);

            if (msg != UserUrl)
            {
                return;
            }

            NavigationManager.NavigateTo("/settings/" + UserUrl);
        }
    }
}