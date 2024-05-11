using CompactGit.Utils;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace CompactGit.Components.Pages
{
    public partial class MyRepo : ComponentBase
    {
        public string FindInput { get; set; } = "";
        public RepoDb.RepoDbContext? Context { get; set; }

        [Parameter]
        public string UserUrl { get; set; } = default!;

        [Inject]
        private NavigationManager NavigationManager { get; set; } = default!;

        [Inject]
        private IDbContextFactory<RepoDb.RepoDbContext> DbContextFactory { get; set; } = default!;

        [Inject]
        public ICookie Cookie { get; set; } = default!;

        protected override async Task OnInitializedAsync()
        {
            Context = DbContextFactory.CreateDbContext();

            await base.OnInitializedAsync();
        }

        private void NewButtonClickAsync()
        {
            NavigationManager.NavigateTo("/create-repo");
        }

        private void TypeButtonClickAsync()
        {

        }

        private void SettingsButtonClickAsync(MouseEventArgs e)
        {
            NavigationManager.NavigateTo("/settings/" + UserUrl);
        }

        private void ColumnButtonClickAsync(MouseEventArgs e)
        {
        }

        private void RepositoryClickAsync(string name)
        {
            NavigationManager.NavigateTo(UserUrl + "/" + name);
        }
    }
}