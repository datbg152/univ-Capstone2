using System;
using System.Collections.Generic;

namespace CompactGit.GitDb;

public partial class User
{
    public string Id { get; set; } = null!;

    public string Pw { get; set; } = null!;

    public string Nickname { get; set; } = null!;

    public string Email { get; set; } = null!;
}
