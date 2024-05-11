using CompactGit.Utils;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace CompactGit.Components.Pages
{
    public partial class CreateRepo : ComponentBase
    {
        private string RepositoryName { get; set; } = "";
        private string RepositoryDescription { get; set; } = "";
        private bool AddReadme { get; set; } = true;
        private bool ChooseGitignore { get; set; } = true;
        private bool IsPublic { get; set; } = false;
        public RepoDb.RepoDbContext? Context { get; set; }

        [Inject]
        public IDbContextFactory<RepoDb.RepoDbContext> DbFactory { get; set; } = default!;

        [Inject]
        public NavigationManager NavigationManager { get; set; } = default!;

        [Inject]
        public ICookie Cookie { get; set; } = default!;

        protected override async Task OnInitializedAsync()
        {
            Context = DbFactory.CreateDbContext();

            await base.OnInitializedAsync();
        }

        private async Task CreateRepositoryAsync()
        {
            string loginCookie = await Cookie.GetValue("login");

            await Context!.Repos.LoadAsync();

            Context.Repos.Add(new RepoDb.Repo()
            {
                UserId = loginCookie,
                RepoName = RepositoryName,
                Description = RepositoryDescription,
                IsPublic = IsPublic,
            });

            Context.SaveChanges();

            Cmd.CallCmd("git init --bare " + RepositoryName);
        }
    }
}