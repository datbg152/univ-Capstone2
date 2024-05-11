using CompactGit.Utils;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace CompactGit.Components.Pages
{
    public partial class MyRepo : ComponentBase
    {
        public string FindInput { get; set; } = "";
        public GitDb.GitDbContext? Context { get; set; }

        [Parameter]
        public string UserUrl { get; set; } = default!;

        [Inject]
        private NavigationManager NavigationManager { get; set; }

        [Inject]
        private IDbContextFactory<GitDb.GitDbContext> DbContextFactory { get; set; }

        [Inject]
        public ICookie Cookie { get; set; } = default!;

        private async Task NewButtonClickAsync()
        {
            NavigationManager.NavigateTo("/create-repo");
        }

        private async Task TypeButtonClickAsync()
        {

        }

        private async Task SettingsButtonClickAsync(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/settings/" + UserUrl);
        }

        private async Task ColumnButtonClickAsync(MouseEventArgs e)
        {

        }

        private async Task RepositoryClickAsync()
        {
            NavigationManager.NavigateTo("/repo-detail");
        }
    }
}