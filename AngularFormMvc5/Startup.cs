using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularFormMvc5.Startup))]
namespace AngularFormMvc5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
