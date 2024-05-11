using System;
using System.Collections.Generic;

namespace CompactGit.RepoDb;

public partial class Repo
{
    public string UserId { get; set; } = null!;

    public string RepoName { get; set; } = null!;

    public string Description { get; set; } = null!;
    public bool IsPublic { get; set; }
}
